export default {
  name: 'sakura',
  // 64×64 PNG, 4px arms, ≤ 18000 bytes. docs/avatar.md
  skin: 'assets/me.png',
  languages: ['zh', 'en'],
  // weather: { city: '上海', cityEn: 'Shanghai', latitude: 31.23, longitude: 121.47, timezone: 'Asia/Shanghai' },
  weather: { city: '长沙', cityEn: 'Changsha', latitude: 28.23, longitude: 112.94, timezone: 'Asia/Shanghai' },
  dock: ['blog', 'about', 'mailbox', 'phone'],
  mailbox: { endpoint: '', email: 'vivibetsy@gmail.com', turnstileSitekey: '' },
  badge: true,
};
