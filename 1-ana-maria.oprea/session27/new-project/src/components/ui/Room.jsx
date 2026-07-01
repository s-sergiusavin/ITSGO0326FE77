import './Room.scss';

function Room({status}) {
  return (
    <div className='room' style={{opacity: status}}></div>
  );
}

export default Room;