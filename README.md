# OS X video viewer

A video window without any UI that can stay on top and on all workspaces. The window is draggable and resizable to any size.

Supports streaming from the web, YouTube, YouTube playlists.

A screenshot won’t help - imagine the video of your choice with size of your choice on top of your favorite programs.

## Usage

Surround the url with single quote characters, otherwise your shell will start intepreting `&` and other characters in the url.

```
git clone git@github.com:denis-sokolov/osx-video-viewer.git
npm install
npm start -- --on-top --on-all-spaces 'url-to-the-video'
```
