import { Component, inject, input, signal } from '@angular/core';
import { Product } from '../../../models/products.model';
import { ButtonComponent } from "../../../components/button/button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `
   <div class="bg-white shadow-md border rounded-xl p-6 flex gap-4 items-center mt-3">
<img [src]="item().image" class="w-[50px] h-[50px] object-center"/>
<div class="flex flex-col">
  <span>{{ item().title }}</span>
  <span>{{ "$" + item().price }}</span>
</div>
<div class="flex-1"></div>
<app-button label="Remove" class="text-red-500" (btnClicked)="cartService.removeFromCart(item().id)"/>
</div>

  `,
  styles: ``
})
export class CartItemComponent {
  cartService = inject(CartService);
  item = input.required<Product>()
}
