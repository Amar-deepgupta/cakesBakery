import { Directive,Input } from '@angular/core';
import { CakeService} from './cake.service';
@Directive({
  selector: '[appSearching]'
})
export class SearchingDirective {
  @Input() searchKey: any;
  constructor(private cakes: CakeService) { }
  ngOnChanges(changes: any) {
    if (changes.searchKey.currentValue) {
      this.cakes.cakess = this.cakes.cakecard.filter((e: any) =>
        e.name.toLowerCase().includes(changes.searchKey.currentValue.toLowerCase()));
      
    } else {
      this.cakes.cakess = this.cakes.cakecard;
    }
  
  }
}
