import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test4-page',
  templateUrl: './test4-page.component.html',
  styleUrls: ['./test4-page.component.scss']
})
export class Test4PageComponent implements OnInit {
  surveyForm = [
    {
      id: 1,
      question: 'What was the reason for leaving?',
    },
    {
      id: 2,
      question: 'Did You Feel Your Achievment Were Recognized Throughout Your Employement',
    },
    {
      id: 3,
      question: 'What Suggestions Do You Have For The Company? How Could We Improve?',
    },
    {
      id: 4,
      question: 'Would You Recommend This Company To A Friend?',
    },
    {
      id: 5,
      question: 'Did You Share Any Of The Concerns We Discoussed Today With The Company Before Deciding To Leave?',
    },
  ];

  options = [
    {
      id: 1,
      option: 'Yes',
    },
    {
      id: 2,
      option: 'No'
    },
  ];

  moreOptions = [
    {
      id: 1,
      option: 'Higher pay'
    },
    {
      id: 2,
      option: 'Conflict with other Employees'
    },
    {
      id: 3,
      option: 'Better benifits'
    },
    {
      id: 4,
      option: 'Better benifits'
    },
    {
      id: 5,
      option: 'Career change'
    },
    {
      id: 6,
      option: 'No work from home'
    }
  ];

  notes = [
    "Is there anything that would have changed your mind about leaving?"
  ]
  ratingOptions = [
    { value: '1', checked: false },
    { value: '2', checked: false },
    { value: '3', checked: false },
    { value: '4', checked: false },
    { value: '5', checked: false },
  ]

  ratingBasedOn = [
    {
      id: 1,
      ratingOn: 'Advancement opportunity',
    },
    {
      id: 2,
      ratingOn: 'Benifits',
    },
    {
      id: 3,
      ratingOn: 'Pay',
    },
    {
      id: 4,
      ratingOn: 'Management',
    },
    {
      id: 5,
      ratingOn: 'Work Environment',
    },
    {
      id: 6,
      ratingOn: 'Work Schedule',
    },
  ]
  stream: MediaStream | null = null; 
  showCamera = false; // Flag to show/hide the camera stream
  @ViewChild('videoElement', { static: false }) videoElement: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas', { static: false }) canvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('image', { static: false }) image: ElementRef<HTMLImageElement>;
  @ViewChild('downloadLink', { static: false }) downloadLink: ElementRef<HTMLAnchorElement>;
  constructor() { }

  ngOnInit(): void {
  }


  openCam() {
    if (this.videoElement && this.canvas && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      if (!this.showCamera) {
        // Start the camera stream if it's not already started
        navigator.mediaDevices.getUserMedia({ video: true })
          .then((stream) => {
            this.videoElement.nativeElement.srcObject = stream;
            this.stream = stream; // Store the stream object for later use
            this.showCamera = true;
          })
          .catch((error) => {
            console.error('Error accessing the camera:', error);
          });
      } else {
        // Stop the camera stream if it's already started
        if (this.stream) {
          const tracks = this.stream.getTracks();
          tracks.forEach((track) => track.stop());
          this.stream = null;
          this.videoElement.nativeElement.srcObject = null; // Reset the video element source
          this.showCamera = false;
        }
      }
    } else {
      console.error('getUserMedia is not supported by the browser or videoElement/canvas is not available.');
    }
  }

  takePhoto() {
    if (this.showCamera && this.videoElement && this.canvas && this.image && this.downloadLink) {
      // Check if the videoElement is currently displaying the camera stream
      if (this.videoElement.nativeElement.srcObject) {
        const context = this.canvas.nativeElement.getContext('2d');
        context.drawImage(this.videoElement.nativeElement, 0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);

        // Capture the current frame from the video stream and display it as an image
        this.image.nativeElement.src = this.canvas.nativeElement.toDataURL('image/png');
        this.image.nativeElement.hidden = false;

        // Generate download link for saving the image
        this.downloadLink.nativeElement.href = this.canvas.nativeElement.toDataURL('image/png');
        this.downloadLink.nativeElement.download = 'captured_image.png';
        this.downloadLink.nativeElement.hidden = false;
      } else {
        console.error('Video stream is not available. Start the camera first.');
      }
    }
  }


  ngAfterViewInit() {
    // if (this.videoElement && this.canvas && this.image && this.downloadLink && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    //   navigator.mediaDevices.getUserMedia({ video: true })
    //     .then((stream) => {
    //       this.videoElement.nativeElement.srcObject = stream;
    //       this.showCamera = true;
    //     })
    //     .catch((error) => {
    //       console.error('Error accessing the camera:', error);
    //     });
    // } else {
    //   console.error('getUserMedia is not supported by the browser or videoElement/canvas/image/downloadLink is not available.');
    // }
  }

}
