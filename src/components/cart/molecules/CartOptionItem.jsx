import React from "react";
import Box from "../../common/atoms/Box";
import Button from "../../common/atoms/Button";
import Counter from "../../common/atoms/Counter";
import { comma } from "../../../utils/convert";
import { useMutation, useQueryClient } from "react-query";
import { updateCart } from "../../../apis/cart";

export default function CartOptionItem({ cart, onChange }) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(updateCart);
  return (
    <>
      {cart.quantity > 0 && (
        <Box className="border-[1px] border-solid p-3 border-zinc-300 flex flex-col gap-2">
          <div className=" text-sm tracking-tighter">
            <span>{cart.option.optionName}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              <Button
                className="w-10 h-8 items-center inline-flex bg-white border-[1px]  cursor-pointer border-solid border-zinc-300"
                onClick={() => {
                  mutate([{ cartId: cart.id, quantity: 0 }], {
                    onSuccess: (data) => {
                      console.log("CartOptionItem data", data);
                      queryClient.invalidateQueries("cart");
                    },
                    onError: (error) => {
                      console.log("CartOptionItem error", error);
                    },
                  });
                }}
              >
                삭제
              </Button>
              <Counter
                // 아이디, 변경된 수량, 해당 옵션의 가격
                value={cart.quantity}
                // Counter에서 mark를 받아 increment, decrement를 구분
                onChange={(count, mark) => {
                  onChange(cart.id, count, mark * cart.option.price);
                  mutate([{ cartId: cart.id, quantity: count }], {
                    onSuccess: (data) => {
                      console.log("CartOptionItem data", data);
                      queryClient.invalidateQueries("cart");
                    },
                    onError: (error) => {
                      console.log("CartOptionItem error", error);
                    },
                  });
                }}
              />
            </div>
            <span className=" font-bold tracking-tighter text-sm">
              {comma(cart.price)}원
            </span>
          </div>
        </Box>
      )}
    </>
  );
}
