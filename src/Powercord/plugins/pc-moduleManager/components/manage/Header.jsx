const { React } = require('powercord/webpack');
const { TextInput } = require('powercord/components/settings');
const { Button, Divider, FormNotice } = require('powercord/components');

module.exports = ({ type, experimental, search, onSearch, onOpenFolder }) =>
  <>
    {experimental && <FormNotice
      imageData={{
        width: 60,
        height: 60,
        src: '/assets/0694f38cb0b10cc3b5b89366a0893768.svg'
      }}
      type={FormNotice.Types.DANGER}
      title='Experimental feature'
      body={'This part of Powercord is experimental. Powercord Staff won\'t accept any bug reports nor provide support for it. Use it at your own risk!'}
    />}
    <div className='powercord-entities-manage-header'>
      <h3>Installed {type}</h3>
      {experimental && <Button onClick={() => void 0}>Explore Plugins</Button>}
      <div className='powercord-entities-manage-opener'>
        <Button color={Button.Colors.PRIMARY} look={Button.Looks.OUTLINED} onClick={onOpenFolder}>
          Open {type[0].toUpperCase() + type.slice(1)} Folder
        </Button>
      </div>
    </div>
    <Divider/>
    <div className='powercord-entities-manage-search'>
      <TextInput
        value={search}
        onChange={onSearch}
        placeholder='What are you looking for?'
      >
        Search {type}...
      </TextInput>
    </div>
  </>;
