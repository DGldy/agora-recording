const shell = require('shelljs');

const generateVideo = async channel => {
    shell.exec(`python ~/agora-recording/record/src/sdk/tools/video_convert.py -f ~/agora-recording/server/output/${channel}`, {async: false} ).stdin;
}

const moveVideo = async channel => {
    shell.exec(`find ../output/${channel} -name "*av.mp4" | xargs -n1 -i cp {} ../output/${channel}/static.mp4`);
}

module.exports = {
    generateVideo,
    moveVideo
}
