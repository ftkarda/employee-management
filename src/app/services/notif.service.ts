import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
    providedIn: 'root'
})
export class NotifService {

    notifErrorAlert(text: any) {
        Swal.fire({
            title: 'Error!',
            text: text,
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }

    notifSuccessAlert(text: any) {
        Swal.fire({
            title: 'Success!',
            text: text,
            icon: 'success',
            confirmButtonText: 'Cool'
        })
    }
}
