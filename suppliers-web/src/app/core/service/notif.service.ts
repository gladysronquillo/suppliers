import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import * as baseConstants from '../../core/base-constants';

@Injectable()
export class NotifService {

	options = {
		timeOut: baseConstants.NOTIFY_TIME,
		closeButton: true,
		messageClass: 'toast-title',
		tapToDismiss: false,
		enableHtml: true
	};

	constructor(private toastr: ToastrService) { }

	info(message: string, title?: string | null, timeOut?: number) {
		if (timeOut) {
			this.options.timeOut = timeOut;
		}
		this.toastr.info(message, title != null ? title : '', this.options);
	}

	success(message: string, title?: string | null, timeOut?: number) {
		if (timeOut) {
			this.options.timeOut = timeOut;
		}
		this.toastr.success(message, title != null ? title : '', this.options);
	}

	danger(message: string, title?: string | null, timeOut?: number) {
		if (timeOut) {
			this.options.timeOut = timeOut;
		}
		this.toastr.error(message, title != null ? title : '', this.options);
	}

	warning(message: string, title?: string | null, timeOut?: number) {
		if (timeOut) {
			this.options.timeOut = timeOut;
		}
		this.toastr.warning(message, title != null ? title : '', this.options);
	}

	closeAll() {
		this.toastr.clear();
	}
}
