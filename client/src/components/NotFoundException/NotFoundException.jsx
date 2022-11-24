import './NotFoundException.css';
import { useState } from 'react'
import importedAudio1 from '../../sounds/where_do_you_think_you_are_going.mp3';
import importedAudio2 from '../../sounds/because_i_dont_think_you_are_going.mp3';
import importedAudio3 from '../../sounds/you_really_shouldnt.mp3';
import importedAudio4 from '../../sounds/its_not_too_late.mp3';
import importedAudio5 from '../../sounds/im_not_angry.mp3';
import importedAudio6 from '../../sounds/i_feel_sorry_for_you.mp3';

export default function NotFoundException() {
    let audio1 = new Audio(importedAudio1)
    let audio2 = new Audio(importedAudio2)
    let audio3 = new Audio(importedAudio3)
    let audio4 = new Audio(importedAudio4)
    let audio5 = new Audio(importedAudio5)
    let audio6 = new Audio(importedAudio6)

    let [messageIndex, setMessageIndex] = useState(0)
    let [audioIndex, setAudioIndex] = useState(0)
    let messages = [
        "",
        'Where do you think you are going',
        "Because I don't think you're going where you think you're going." ,
        "You shouldn't be here. This isn't safe for you.",
        "It's not too late to turn back.",
        "I'm not angry. Just go back to the testing area.",
        "I feel sorry for you, really, because you're not even in the right place."
    ]
    
    let audios = [
        audio1,
        audio2,
        audio3,
        audio4,
        audio5,
        audio6,
    ];
    console.log(audios[audioIndex]);
    console.log(messageIndex)
    console.log(audioIndex)

    const playSoundShowSubtitles = () => {
        if(audioIndex !== -1){
            audios[audioIndex].play();
        }
        if(audioIndex === audios.length - 1){
            setAudioIndex(-1)
        }else{
            setAudioIndex(audioIndex + 1)
        }
        if(messageIndex === messages.length - 1){
            setMessageIndex(0);
        }else{
            setMessageIndex(messageIndex + 1);
        }
    }


    return (
        <>
        <div
            onClick={()=>{playSoundShowSubtitles()}}
            className='not-found-page-container'>
                {/* <button
                    className='not-found-message'
                onClick={()=>{audio1.play()}}
                >
                    PLAY
                </button> */}
                <div 
                    className='not-found-message'>
                    {messages[messageIndex]}
                </div>
            </div>
        </>
    )
}

