import { Component } from '@angular/core'
import { faBackward, faLongArrowAltRight, faPlus } from '@fortawesome/free-solid-svg-icons'

@Component({ selector: 'text-replacements', template: `
<div class="flex flex-col gap-2 h-full p-2">
  <div class="flex flex-rol items-center justify-between">
    <strong>Text Replacements</strong>
    <fa-icon class="block cursor-pointer hover:bg-gray-200 p-2 w-fit" [icon]="faPlus" *ngIf="!selectedTextReplacement" [ngStyle]="{ lineHeight: 0 }" tabindex="0"/>
  </div>
  <div class="overflow-auto" *ngIf="!selectedTextReplacement" [ngStyle]="{ flex: '1 1 auto' }">
    <div class="cursor-pointer hover:bg-gray-200 p-2" (click)="selectedTextReplacement = textReplacement.value" *ngFor="let textReplacement of textReplacements | keyvalue" tabindex="0">
      {{textReplacement.value.text}} -> {{textReplacement.value.replacement}}
    </div>
  </div>
  <div *ngIf="selectedTextReplacement">
    <fa-icon class="block cursor-pointer hover:bg-gray-200 p-2 w-fit" (click)="selectedTextReplacement = undefined" [icon]="faBackward" [ngStyle]="{ lineHeight: 0 }" tabindex="0"/>
    {{selectedTextReplacement.text}} -> {{selectedTextReplacement.replacement}}
  </div>
</div>
` })
export class TextReplacementsComponent {
  faBackward = faBackward
  faLongArrowAltRight = faLongArrowAltRight
  faPlus = faPlus
  selectedTextReplacement?: { id: string, replacement: string, text: string } = { id: '0', replacement: 'Hola! Soy Dora!', text: 'greeting' }
  textReplacements = new Map([
    [0, { id: '0', replacement: 'Hola! Soy Dora!', text: 'greeting' }],
    [1, { id: '1', replacement: 'spam', text: 'ss' }],
    [2, { id: '2', replacement: 'no', text: 'yes' }]
  ])
}

// on enter/on click +
// on enter select
// on enter back
// learn angular lol
