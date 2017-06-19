import { 
    Component,
    Input, 
    Output, 
    OnChanges, 
    EventEmitter 
} from '@angular/core';


@Component({
    selector: 'force',
    templateUrl: './force.component.html',
    styleUrls: ['./force.component.css']
})
export class ForceComponent implements OnChanges {
    @Input() forceStrength: number;
    @Input() iconSize: string;
    @Output() forceStrengthClicked: EventEmitter<string> = new EventEmitter<string>();
    forceIconsWidth: number;

    ngOnChanges(): void {
        // Convert x out of 5 starts
        // to y out of 86px width
        this.forceIconsWidth = this.forceStrength * 133 / 5;
    }

    onClick(): void {
        this.forceStrengthClicked.emit(`The field ${this.forceStrength} was clicked!`);
    }
}