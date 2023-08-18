const Button = () => {
    const fetchCatImage = async () => {
        const res = await fetch("https://api.thecatapi.com/v1/images/search");
        const result = await res.json();
        console.log(result);
        return result[0];
      };

      const handleClick = async () => {
        const catImage = await fetchCatImage();
        console.log(catImage);
      }

    return (
        <button
          style={{marginTop: "18" }}
          onClick={handleClick}
        >
          今日の猫さん
        </button>

    )
}

export default Button;