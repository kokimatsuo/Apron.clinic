// app/layout.js
export const metadata = {
  title: '医療音声要約アプリ',
  description: '音声→文字起こし→医療テンプレ自動整形',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
