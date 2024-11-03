import { useState, useRef } from 'react';
import YouTube from 'react-youtube';
import './Handlers.css';

export function Handlers() {
    const [musicLink, setMusicLink] = useState('');
    const [musicList, setMusicList] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const playerRef = useRef(null);
    const playbackDuration = 15000;

    const getVideoId = (url) => {
        const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(youtubeRegex);
        return match ? match[1] : null;
    };

    const isValidLink = (url) => {
        const validYouTube = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be).+/;
        const validSpotify = /^(https?:\/\/)?(www\.)?(spotify\.com).+/;
        const validAppleMusic = /^(https?:\/\/)?(www\.)?(music\.apple\.com).+/;
        const validYouTubeMusic = /^(https?:\/\/)?(www\.)?(music\.youtube\.com).+/;

        return validYouTube.test(url) || validSpotify.test(url) || validAppleMusic.test(url) || validYouTubeMusic.test(url);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (musicLink && isValidLink(musicLink)) {
            setIsModalOpen(true);
            setMusicLink('');
        } else {
            alert("Please enter a valid music link (YouTube, Spotify, Apple Music, or YouTube Music).");
        }
    };

    const handleUpvote = (index) => {
        const updatedList = [...musicList];
        updatedList[index].votes += 1;
        setMusicList(updatedList);
    };

    const onReady = (event) => {
        playerRef.current = event.target;
    };

    const handlePlay = (item) => {
        const { startTime } = item;

        if (playerRef.current) {
            playerRef.current.seekTo(startTime);
            playerRef.current.playVideo();
            setTimeout(() => {
                playerRef.current.pauseVideo();
            }, playbackDuration);
        }
    };

    const setStartTimePercentage = (percentage) => {
        const videoId = getVideoId(musicLink);
        const newMusicItem = {
            link: musicLink,
            votes: 0,
            startTime: Math.floor(percentage * 0.01 * 300),
        };
        setMusicList([...musicList, newMusicItem]);
        setIsModalOpen(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="url"
                    placeholder="Enter Your Music Link"
                    value={musicLink}
                    onChange={(e) => setMusicLink(e.target.value)}
                    required
                />
                <button type="submit">Submit Music</button>
            </form>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Choose your start time, senpai!</h2>
                        <div>
                            <button onClick={() => setStartTimePercentage(0)}>0%</button>
                            <button onClick={() => setStartTimePercentage(20)}>20%</button>
                            <button onClick={() => setStartTimePercentage(50)}>50%</button>
                            <button onClick={() => setStartTimePercentage(80)}>80%</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="music-list">
                {musicList.map((item, index) => {
                    const videoId = getVideoId(item.link);
                    return (
                        videoId && (
                            <div key={index} className="music-item">
                                <YouTube
                                    videoId={videoId}
                                    opts={{ width: '400', height: '300', playerVars: { autoplay: 0 } }}
                                    onReady={onReady}
                                />
                                <p>Votes: {item.votes}</p>
                                <button onClick={() => handleUpvote(index)}>Vote</button>
                                <button onClick={() => handlePlay(item)}>Play</button>
                            </div>
                        )
                    );
                })}
            </div>
        </>
    );
}