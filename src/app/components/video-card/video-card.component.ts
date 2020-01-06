import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/app/services/api.service';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {
  @Input() video: Video;
  constructor() { }

  ngOnInit() {

  }

  validImgSrc(src: string) {
    return src.replace('%{width}', '440').replace('%{height}', '248');
  }
}
