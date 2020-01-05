import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {
  @Input() video: object;ß
  constructor() { }

  ngOnInit() {
    console.log(this.video)
  }

  validImgSrc(src: string) {
    return src.replace('%{width}', '440').replace('%{height}', '248');
  }
}
