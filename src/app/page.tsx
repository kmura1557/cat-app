import Image from 'next/image';
import Button from './button';

export default function Home() {
  const fetchCatImage = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const result = await res.json();
    console.log(result);
  };

  return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        height: "100vh"
      }} >
        <h1>猫画像アプリ</h1>
        <img 
          src="https://cdn2.thecatapi.com/images/H1DKDGtxI.jpg"
          width={300}
          height="auto"
          style={{marginTop: "80px"}}
          />

        <Button />
        {/* <button
          style={{marginTop: "18" }}
          onClick={fetchCatImage}
        >
          今日の猫さん
        </button> */}
      </div>
    );
  }