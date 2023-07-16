import '../src/app.css'

function App() {

  const moneyPyramid = [
    {id:1,amount:"100$"},
    {id:2,amount:"200$"},
    {id:3,amount:"300$"},
    {id:4,amount:"400$"},
    {id:5,amount:"500$"},
    {id:6,amount:"600$"},
    {id:7,amount:"700$"},
    {id:8,amount:"800$"},
    {id:9,amount:"900$"},
    {id:10,amount:"1000$"},
    {id:11,amount:"1100$"},
    {id:12,amount:"1200$"},
    {id:13,amount:"1300$"},
    {id:14,amount:"1400$"},
    {id:15,amount:"1500$"},
  ]

  return (
    <div className="app">
      <div className="main">
      <div className="top">
        <div className="timer">30</div>
      </div>
      <div className="bottom">Question ans Answer</div>
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m)=>(
            <li className='moneyListItem'>
            <span className='moneyListItemNumber'>{m.id}</span>
            <span className='moneyListItemAmount'>{m.amount}</span>
          </li>

          ))}
          
        </ul>
      </div>
    </div>
  );
}

export default App;
