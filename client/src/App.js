import './App.css';
import {StreamChat} from 'stream-chat'
import {Chat} from 'stream-chat-react'
import Cookies from 'universal-cookie'
import { ChannelListContainer } from './components/ChannelListContainer';
import { ChannelContainer } from './components/ChannelContainer';

const apiKey='bcypkyz4rxyn'
const client = StreamChat.getInstance(apiKey)
function App() {
  return (
    <div className="App_wrapper">
      <Chat client={client} theme='team light'>
          <ChannelListContainer />
          <ChannelContainer />
      </Chat>
    </div>
  );
}

export default App;
