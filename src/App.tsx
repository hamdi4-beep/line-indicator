

function Comment({
  data
}: {
  data: {
    comment: string
    username: string
    url: string
  }
}) {
  return (
    <div className="comment grid grid-cols-none">
      <div className="user-avatar bg-[#000] rounded-full overflow-hidden">
        <img src={data.url} alt="" />
      </div>

      <h2 className="font-bold self-center">{data.username}</h2>

      <div className="content col-start-2">
        <p>{data.comment}</p>
      </div>
    </div>
  )
}

function App() {
  const data = [{
    username: 'nog642',
    comment: "It's a very strong correlation between years of experience and skill though. Especially the types of skills that you learn with job experience, like real world problem solving, collaboration with a team, leadership, etc.",
    url: "https://styles.redditmedia.com/t5_1oeu05/styles/profileIcon_snooa213164a-daf6-4cc1-af2d-952c1945dca8-headshot-f.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=737b191dd8ffe8ce48da6c47f566e3ad0e27930e"
  }, {
    username: 'gyroda',
    comment: 'Yeah, the difference between never having worked a regular dev job before and 1 year of experience is massive.',
    url: 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_7.png'
  }, {
    username: 'SecureSection9242',
    comment: 'Yes, I agree! I believe it means they want to ensure someone’s been working long enough at a company to understand how things work.',
    url: 'https://styles.redditmedia.com/t5_5vwinx/styles/profileIcon_snoo96703983-8549-49f1-99f9-b9f5b1d3d5d8-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=4345e506121effb904a432e40ee4c5884406ebea'
  }]

  return (
    <div className="App max-w-md mx-auto p-4">
      <div className="bg-[#eee] p-4 rounded-xl">
        {data.map((it, i) => (
          <Comment
            data={it}
            key={i}
          />
        ))}
      </div>
    </div>
  )
}

export default App