import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const isItemUnique = (foodItem) => {
        const foodItemId = foodItem?.card?.info?.id;

        for (let i = 0; i < state?.items?.length; i++) {
          const { id } = state?.items[i]?.card?.info;
          if (id === foodItemId) {
            return false;
          }
        }

        return true;
      };

      const isUnique = isItemUnique(action.payload);

      if (isUnique) {
        state.items.push(action.payload);
      }
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
