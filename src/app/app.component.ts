import { Component, ElementRef, ViewChild } from '@angular/core'

@Component({ selector: 'app-root', template: `
<div class="flex flex-rol gap-2 h-screen p-2" [ngStyle]="{ flex: '1 1 auto' }">
  <div class="sm:w-auto w-4 z-10">
    <div class="bg-white border-2 duration-200 flex flex-col h-full overflow-hidden" (click)="isExpanded = !isExpanded" (keydown.enter)="isExpanded = !isExpanded" [ngStyle]="{ 'max-width': isExpanded ? '256px' : '16px', 'min-width': isExpanded ? '256px' : '16px' }" tabindex="0">
      <div class="cursor-pointer duration-200 h-full" [ngStyle]="{ opacity: isExpanded ? 1 : 0 }">
        <div class="font-bold p-2">Users</div>
        <div class="hover:bg-gray-200 p-2" *ngFor="let user of ['bob', 'sally', 'doll']">{{ user }}</div>
      </div>
      <settings *ngIf="isExpanded" />
    </div>
  </div>

  <div class="flex flex-col gap-2 h-full min-w-0" [ngStyle]="{ flex: '1 1 auto' }">
    <div class="flex flex-col gap-2 h-full overflow-auto" #scroll>
      <div class="border-2 flex flex-col gap-2 p-2 w-fit" *ngFor="let message of messages; let i = index" [ngStyle]="{ marginTop: i === 0 ? 'auto' : undefined, 'min-width': '128px' }">
        <div class="font-bold">bob</div>
        <div>{{ message }}</div>
      </div>
    </div>
    <input class="border-2 focus:outline-none h-12 p-2" #message (keyup.enter)="message.value && messages.push(message.value); message.value = ''" placeholder="Send A Message">
  </div>
</div>
` })
export class AppComponent {
  isExpanded = true
  messages: string[] = []
  @ViewChild('scroll') scroll?: ElementRef

  ngAfterViewChecked() {
    if (!this.scroll) return
    this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight
  }
}
