function solution(genres, plays) {
    let genre_play = new Map();
    let genre_song = new Map();
    let song_play = new Map();
    
    for (let i = 0; i < genres.length; i++) {
        if (!genre_play.has(genres[i])) genre_play.set(genres[i], 0);
        genre_play.set(genres[i], genre_play.get(genres[i]) + plays[i]);
        if (!genre_song.has(genres[i])) genre_song.set(genres[i], []);
        genre_song.get(genres[i]).push(i);
        song_play.set(i, plays[i]);
    }
    
    let sortedGenres = [...new Set(genres)].sort((a, b) => genre_play.get(b) - genre_play.get(a))
    let answer = [];
    
    for (let genre of sortedGenres) {
        answer = [...answer, ...genre_song.get(genre).sort((a, b) => song_play.get(b) - song_play.get(a)).slice(0, 2)];
    }
    
    return answer;
}