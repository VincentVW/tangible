const SerialPort = require('serialport');
const EventEmitter = require('event-emitter-es6');

class Serial extends EventEmitter {

  start(path = '/dev/tty-usbserial1', baudRate = 9600, autoSplitOn = null) {
    this.dataBuffer = '';
    this.autoSeparator = autoSplitOn;
    this.port = new SerialPort(path, {
      baudRate: baudRate
    });
    this.port.on('error', err => {
      this._onError(err.message);
    });
    this.port.on('data', data => {
      this._onData(data);
    });
  }

  readStringUntil(separator) {
    if (this.dataBuffer.length) {
      const index = this.dataBuffer.indexOf(separator);
      if (index > -1) {
        const segment = this.dataBuffer.substr(0, index);
        this.dataBuffer = this.dataBuffer.substr(index + separator.length);
        return segment;
      }
    }
    return null;
  }

  write(message) {
    this.port.write(message, function(err) {
      if (err) {
        this.onError(err.message);
      }
    });
  }

  _onData(data) {
    this.dataBuffer += data;
    if (this.autoSeparator) {
      this.emit('data', this.readStringUntil(this.autoSeparator));
    }
    else this.emit('data', data);
  }

  _onError(err) {
    console.error(err);
  }
}

module.exports = Serial;