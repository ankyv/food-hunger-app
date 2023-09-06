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
    increaseItem: (state, action) => {
      for (const item of state.items) {
        if (item.foodItem.id === action.payload) {
          item.count++;
        }
      }
    },
    decreaseItem: (state, action) => {
      for (const item of state.items) {
        if (item.foodItem.id === action.payload) {
          item.count--;
        }
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => {
        return item.foodItem.id !== action.payload;
      });
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, increaseItem, decreaseItem, removeItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
