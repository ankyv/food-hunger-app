import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const isItemUnique = () => {
        const itemId = action.payload.id;

        for (const item of state.items) {
          if (item.foodItem.id === itemId) {
            item.count++;
            return false;
          }
        }

        return true;
      };

      if (isItemUnique()) {
        state.items.push({
          foodItem: action.payload,
          count: 1,
        });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => {
        return item?.card?.info?.id !== action.payload;
      });
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
