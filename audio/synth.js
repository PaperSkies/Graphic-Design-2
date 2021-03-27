const bigBrainWebSynth = () => {
    let musicContext = new AudioContext({
		latencyHint: 'playback',
		sampleRate: 44100,
	});
	console.dir(musicContext)
	console.log(typeof(musicContext))
}

bigBrainWebSynth(); // TODO: Delete

export default bigBrainWebSynth
