export default function getInput() {
  let getUserMedia = (navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia);

  const constraints = {
            'audio': {
                'mandatory': {
                    'googEchoCancellation': 'false',
                    'googAutoGainControl': 'false',
                    'googNoiseSuppression': 'false',
                    'googHighpassFilter': 'false'
                },
                'optional': []
            },
        };

  if(!getUserMedia)
    Promise.reject(new Error('getUserMedia not supported!'));

  if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    return navigator.mediaDevices.getUserMedia(constraints);
  } else {
    return new Promise((resolve, reject) => {
      getUserMedia.call(navigator, constraints, constraints, resolve, reject);
    });
  }
}
