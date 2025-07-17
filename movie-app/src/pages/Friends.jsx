const Friends = () => {
  const friends = [
    { id: 1, name: 'John Doe', status: 'online' },
    { id: 2, name: 'Jane Smith', status: 'offline' },
    { id: 3, name: 'Mike Johnson', status: 'online' },
    { id: 4, name: 'Sarah Wilson', status: 'away' }
  ]

  return (
    <div className="wrapper">
      <h1>Friends</h1>
      <div className="friends-list">
        <ul>
          {friends.map(friend => (
            <li key={friend.id} className={`friend-item ${friend.status}`}>
              <div className="friend-info">
                <span className="friend-name">{friend.name}</span>
                <span className={`status ${friend.status}`}>{friend.status}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Friends 