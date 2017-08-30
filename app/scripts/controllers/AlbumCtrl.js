(function() {
  function AlbumCtrl(Fixtures, SongPlayer) {
    this.albumData = Fixtures.getAlbum();
    this.songPlayer = SongPlayer;
    console.log("album data", this.albumData);
  }

     angular
       .module('blocJams')
       .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
 })();
