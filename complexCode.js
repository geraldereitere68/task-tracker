/* 
Filename: complexCode.js

Description: This code demonstrates a complex and sophisticated JavaScript program that implements a music player with a playlist functionality, volume control, and playback controls. It also includes error handling and user interface updates.

Note: This code is purely for demonstration purposes and does not include an actual implementation of audio playback. 
*/

// Playlist class to manage playlist functionality
class Playlist {
  constructor() {
    this.tracks = [];
    this.currentTrackIndex = 0;
  }

  addTrack(track) {
    this.tracks.push(track);
  }

  removeTrack(track) {
    const index = this.tracks.indexOf(track);
    if (index !== -1) {
      this.tracks.splice(index, 1);
      if (index < this.currentTrackIndex) {
        this.currentTrackIndex--;
      }
      if (this.currentTrackIndex >= this.tracks.length) {
        this.currentTrackIndex = 0;
      }
    }
  }

  getNextTrack() {
    if (this.tracks.length === 0) {
      return null;
    }

    if (this.currentTrackIndex + 1 >= this.tracks.length) {
      this.currentTrackIndex = 0;
    } else {
      this.currentTrackIndex++;
    }

    return this.tracks[this.currentTrackIndex];
  }

  getPreviousTrack() {
    if (this.tracks.length === 0) {
      return null;
    }

    if (this.currentTrackIndex === 0) {
      this.currentTrackIndex = this.tracks.length - 1;
    } else {
      this.currentTrackIndex--;
    }

    return this.tracks[this.currentTrackIndex];
  }
}

// Player class to manage the audio playback
class Player {
  constructor() {
    this.playlist = new Playlist();
    this.volume = 50;
  }

  play() {
    const currentTrack = this.getCurrentTrack();
    if (currentTrack) {
      console.log(`Now playing: ${currentTrack}`);
      // Play audio
    }
  }

  pause() {
    console.log("Playback paused");
    // Pause audio
  }

  stop() {
    console.log("Playback stopped");
    // Stop audio
  }

  next() {
    const track = this.playlist.getNextTrack();
    if (track) {
      console.log(`Skipping to next track: ${track}`);
      // Play next audio
    } else {
      console.log("No next track in the playlist");
      // Handle end of playlist flow
    }
  }

  previous() {
    const track = this.playlist.getPreviousTrack();
    if (track) {
      console.log(`Skipping to previous track: ${track}`);
      // Play previous audio
    } else {
      console.log("No previous track in the playlist");
      // Handle start of playlist flow
    }
  }

  setVolume(volume) {
    if (volume >= 0 && volume <= 100) {
      this.volume = volume;
      console.log(`Volume set to ${this.volume}`);
      // Update audio volume
    } else {
      console.log("Volume value out of range");
      // Handle volume range validation
    }
  }

  getCurrentTrack() {
    if (this.playlist.tracks.length > 0) {
      return this.playlist.tracks[this.playlist.currentTrackIndex];
    }
    return null;
  }
}

// Sample usage of the music player
const player = new Player();

player.playlist.addTrack("Track 1");
player.playlist.addTrack("Track 2");
player.playlist.addTrack("Track 3");

player.play();
player.next();
player.previous();

player.setVolume(80);
player.pause();
player.stop();

player.playlist.removeTrack("Track 2");

console.log(player.getCurrentTrack());