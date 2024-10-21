import {Observable} from 'rxjs'

class AudioPlayer extends Audio {
  private observable: Observable<string>;

  constructor(URL: string) {
    super(URL)

    this.observable = new Observable<string>(subscriber => {
      subscriber.next(this.paused ? 'paused' : 'playing')
      subscriber.complete()
    })
  }

  run(callback: (observable: Observable<string>) => void | PromiseLike<void>) {
    if (this.paused) {
      const promise = this.play()
      return promise.then(() => callback(this.observable))
    }

    this.pause()

    return callback(this.observable)
  }

  done(updateState: React.Dispatch<React.SetStateAction<string>>) {
    const observable = this.observable

    this.onended = () => observable.subscribe({
      complete() {
        updateState('paused')
      }
    })
  }
}

export default AudioPlayer