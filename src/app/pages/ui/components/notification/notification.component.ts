import { Component, OnInit } from '@angular/core';
import { RootComponent } from '../../../../shared/roots/root.component';
import { GlobalService } from '../../../../shared/services/global.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent extends RootComponent implements OnInit {

  constructor(public _globalService: GlobalService) {
    super(_globalService);
  }

  ngOnInit() { }

  notification(type) {
    this.alertMessage(
      {
        type: type,
        title: 'Look here!',
        value: 'This alert needs your attention.'
      }
    );
  }

  alert2Basic() {
    swal(
      'The Internet?',
      'That thing is still around?',
      'question'
    );
  }

  alert2Error() {
    swal({
      type: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    });
  }

  alertConfirm() {
    swal({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        swal(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });
  }

  alertTimer() {
    swal({
      title: 'Auto close alert!',
      text: 'I will close in 2 seconds.',
      timer: 2000,
      onOpen: () => {
        swal.showLoading();
      }
    }).then((result) => {
      if (result.dismiss.toString() === 'timer') {
        console.log('I was closed by the timer');
      }
    });
  }

  alertRequest() {
    swal({
      title: 'Submit email to run ajax request',
      input: 'email',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      preConfirm: (email) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            if (email === 'taken@example.com') {
              swal.showValidationError(
                'This email is already taken.'
              );
            }
            resolve();
          }, 2000);
        });
      },
      allowOutsideClick: () => !swal.isLoading()
    }).then((result) => {
      if (result.value) {
        swal({
          type: 'success',
          title: 'Ajax request finished!',
          html: 'Submitted email: ' + result.value
        });
      }
    });
  }

  alertImg() {
    swal({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      animation: false
    });
  }
}
