import { Component, ElementRef, HostListener, ViewChild } from '@angular/core'
import { faGear } from '@fortawesome/free-solid-svg-icons'

@Component({ selector: 'settings', template: `
<div class="p-2" (click)="$event.stopPropagation(); showDialog = false">
  <fa-icon class="block cursor-pointer hover:bg-gray-200 p-2 w-fit" (click)="showDialog = !showDialog; $event.stopPropagation()" [icon]="faGear" (keydown.enter)="showDialog = !showDialog; $event.stopPropagation()" (keydown.esc)="showDialog = false" [ngStyle]="{ lineHeight: 0 }" tabindex="0" />
</div>
<dialog class="border-2 h-1/2 inset-2/4 p-0 w-1/2" (click)="$event.stopPropagation()" (keydown.enter)="$event.stopPropagation()" (keydown.esc)="showDialog = false" [ngStyle]="{ translate: '-50%' }" [open]="showDialog" #settings>
  <div class="flex flex-row h-full">
    <div [ngStyle]="{ flex: '0 1 25%' }">
      <div class="bg-gray-100 cursor-pointer hover:bg-gray-200 p-2" tabindex="0">Text Replacements</div>
    </div>
    <div class="border-r-2"></div>
    <div [ngStyle]="{ flex: '0 1 75%' }">
      <text-replacements />
    </div>
  </div>
</dialog>
` })
export class SettingsComponent {
  faGear = faGear
  @ViewChild('settings') settings!: ElementRef
  showDialog = true

  @HostListener('document:click', ['$event'])
  documentClick(pointerEvent: PointerEvent) {
    if(!this.settings.nativeElement.contains(pointerEvent.target)) {
      this.showDialog = false
    }
  }
}
