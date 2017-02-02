var playlist = {goory: "keep coding", Avi: "learn love"};

function updatePlaylist(playlist, artist_name, song_name) {
  for (var key in playlist){
    if (key == artist_name){
      var foundkey = key
    }
  }
    if (foundkey){ playlist[foundkey] = song_name; }
    else { playlist[artist_name] = song_name }
    return playlist;
}

function removeFromPlaylist(playlist, artist_name) {
  delete playlist[artist_name];
  return playlist;
}
