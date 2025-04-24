function App() {
  const handleClick = () => {
    console.log('디버깅용) 웹뷰에서 누른 버튼');
  };
  return (
    <>
      <br />
      <br />
      <button onClick={handleClick}>웹뷰 버튼</button>
    </>
  );
}

export default App;
