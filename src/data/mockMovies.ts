import { Movie } from '@/types/movie';

export const mockMovies: Movie[] = [
  {
    id: 1,
    title: 'Wonka',
    overview: 'Câu chuyện kỳ diệu về hành trình của Willy Wonka trở thành người thợ làm chocolate vĩ đại nhất thế giới.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/qhb1qOilapbapxWQn9jtRCMwXJF.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/yOm993lsJyPmBodlYjgpPwBjXP9.jpg',
    releaseDate: '2023-12-15',
    rating: 7.2,
    genres: ['Phiêu Lưu', 'Hài', 'Gia Đình'],
    duration: 116,
    quality: 'FHD',
    type: 'movie'
  },
  {
    id: 2,
    title: 'Aquaman và Vương Quốc Thất Lạc',
    overview: 'Sau các sự kiện của phần phim đầu tiên, Arthur Curry/Aquaman đã trở thành Vua của Atlantis. Giờ đây, anh phải bảo vệ cả người dân trên mặt đất và dưới đại dương.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/jXJxMcVoEVMFvMBn0c9wbDdCYoJ.jpg',
    releaseDate: '2023-12-22',
    rating: 6.9,
    genres: ['Hành Động', 'Phiêu Lưu', 'Viễn Tưởng'],
    duration: 124,
    quality: 'FHD',
    type: 'movie'
  },
  {
    id: 3,
    title: 'Người Nhện: Du Hành Vũ Trụ Nhện',
    overview: 'Miles Morales tái xuất trong phần tiếp theo của saga Spider-Verse đoạt giải Oscar, một cuộc phiêu lưu hoành tráng đưa Người Nhện thân thiện với khu phố Brooklyn toàn thời gian băng qua đa vũ trụ.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/gkseI3CUfQtMKX41XD4AxDzhQb7.jpg',
    releaseDate: '2023-06-02',
    rating: 8.4,
    genres: ['Hoạt Hình', 'Hành Động', 'Phiêu Lưu'],
    duration: 140,
    quality: 'FHD',
    type: 'movie'
  },
  {
    id: 4,
    title: 'Oppenheimer',
    overview: 'Câu chuyện về nhà vật lý lý thuyết J. Robert Oppenheimer và vai trò của ông trong việc phát triển bom nguyên tử.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg',
    releaseDate: '2023-07-21',
    rating: 8.2,
    genres: ['Lịch Sử', 'Chính Kịch'],
    duration: 180,
    quality: 'FHD',
    type: 'movie'
  },
  {
    id: 5,
    title: 'Loki',
    overview: 'Sau khi đánh cắp Tesseract trong Avengers: Endgame, một phiên bản thay thế của Loki được đưa đến Time Variance Authority (TVA), một tổ chức quan liêu tồn tại bên ngoài thời gian và không gian.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/voHUmluYmKyleFkTu3lOXQG702u.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/q3jHCb4dMfYF6ojikKuHd6LscxC.jpg',
    releaseDate: '2023-10-06',
    rating: 8.1,
    genres: ['Viễn Tưởng', 'Hành Động'],
    duration: 45,
    quality: 'FHD',
    type: 'series',
    episodes: {
      current: 6,
      total: 6
    }
  }
];

export const getTrendingMovies = (): Movie[] => mockMovies.slice(0, 3);
export const getNewMovies = (): Movie[] => mockMovies.slice(1, 5);
export const getUpcomingMovies = (): Movie[] => mockMovies.slice(2); 