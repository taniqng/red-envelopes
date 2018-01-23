import { Promise } from 'rsvp';
import { assert } from '@ember/debug';

export default function readImg(file, readAs, progressCallback = null) {
  const reader = new FileReader();

  assert(
    'readAs method "' + readAs + '" not implemented', (reader[readAs] && readAs !== 'abort')
  );

  return new Promise((resolve, reject) => {
    reader.onload = function(event) {
      resolve({
        // TODO deprecate filename
        filename: file.name,
        name: file.name,
        type: file.type,
        data: event.target.result,
        size: file.size
      });
    };

    reader.onabort = function() {
      reject({
        event: 'onabort'
      });
    };

    reader.onerror = function(error) {
      reject({
        event: 'onerror',
        error: error
      });
    };

    if (typeof progressCallback === 'function') {
      reader.onprogress = progressCallback;
    }

    reader[readAs](file);
  });
}
