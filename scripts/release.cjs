const semanticRelease = require('semantic-release');
const {WritableStreamBuffer} = require('stream-buffers');

const stdoutBuffer = WritableStreamBuffer();
const stderrBuffer = WritableStreamBuffer();