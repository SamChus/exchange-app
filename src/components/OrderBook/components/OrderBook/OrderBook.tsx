
import { IconsArrowDownSimpleLine } from "../../icons/IconsArrowDownSimpleLine";
import { IconsArrowUp2Line1 } from "../../icons/IconsArrowUp2Line1";
import { Overlay } from "../Overlay";
import { SegmentedPicker } from "../SegmentedPicker";

export const OrderBook = (): JSX.Element => {
  return (
    <div className="relative w-[245px] h-[561px] bg-[url(/BG.png)] bg-[100%_100%]">
      <div className="flex w-[236px] items-center justify-between px-[3px] py-0 absolute top-[54px] left-[5px]">
        <div className="inline-flex items-start gap-[4px] relative flex-[0_0_auto]">
          <div className="bg-[#353945] relative w-[32px] h-[32px] rounded-[4px] overflow-hidden">
            <div className="inline-flex flex-col items-start gap-[2px] relative top-[11px] left-[10px]">
              <div className="bg-primary-3 relative w-[12px] h-[2px] rounded-[2px]" />
              <div className="relative w-[12px] h-[2px] bg-neutrals-5 rounded-[2px]" />
              <div className="bg-supportsuccess relative w-[12px] h-[2px] rounded-[2px]" />
            </div>
          </div>
          <div className="bg-[#353945] relative w-[32px] h-[32px] rounded-[4px] overflow-hidden">
            <div className="inline-flex flex-col items-start gap-[2px] relative top-[11px] left-[10px]">
              <div className="bg-primary-3 relative w-[12px] h-[2px] rounded-[2px]" />
              <div className="relative w-[12px] h-[2px] bg-neutrals-5 rounded-[2px]" />
              <div className="bg-supportsuccess relative w-[12px] h-[2px] rounded-[2px]" />
            </div>
          </div>
          <div className="bg-[#353945] relative w-[32px] h-[32px] rounded-[4px] overflow-hidden">
            <div className="inline-flex flex-col items-start gap-[2px] relative top-[11px] left-[10px]">
              <div className="bg-primary-3 relative w-[12px] h-[2px] rounded-[2px]" />
              <div className="relative w-[12px] h-[2px] bg-neutrals-5 rounded-[2px]" />
              <div className="bg-supportsuccess relative w-[12px] h-[2px] rounded-[2px]" />
            </div>
          </div>
          <div className="relative w-[32px] h-[32px] rounded-[4px] overflow-hidden">
            <div className="inline-flex flex-col items-start gap-[2px] relative top-[11px] left-[10px]">
              <div className="bg-neutrals-5 relative w-[12px] h-[2px] rounded-[2px]" />
              <div className="relative w-[12px] h-[2px] bg-neutrals-5 rounded-[2px]" />
              <div className="bg-supportsuccess relative w-[12px] h-[2px] rounded-[2px]" />
            </div>
          </div>
          <div className="relative w-[32px] h-[32px] rounded-[4px] overflow-hidden">
            <div className="inline-flex flex-col items-start gap-[2px] relative top-[11px] left-[10px]">
              <div className="bg-primary-3 relative w-[12px] h-[2px] rounded-[2px]" />
              <div className="bg-neutrals-5 relative w-[12px] h-[2px] rounded-[2px]" />
              <div className="relative w-[12px] h-[2px] bg-neutrals-5 rounded-[2px]" />
            </div>
          </div>
        </div>
        <div className="inline-flex items-center justify-center gap-[10px] px-[8px] py-[4px] relative flex-[0_0_auto] bg-[#353945] rounded-[4px]">
          <div className="relative w-fit [font-family:'Satoshi-Medium',Helvetica] font-medium text-neutrals-7 text-[12px] tracking-[0] leading-[20px] whitespace-nowrap">
            10
          </div>
          <IconsArrowUp2Line1 className="!relative !w-[24px] !h-[24px]" />
        </div>
      </div>
      <div className="top-[94px] flex flex-col w-[237px] items-start gap-[4px] absolute left-[4px]">
        <div className="justify-between px-[16px] py-[4px] flex items-start relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative w-[52px] mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-secondaryblack-tint-3 text-[12px] tracking-[0] leading-[16px]">
            <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#a7b1bc] text-[12px] tracking-[0] leading-[16px]">
              Price
              <br />
            </span>
            <span className="text-[9px]">(USDT)</span>
          </p>
          <p className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-secondaryblack-tint-3 text-[12px] text-right tracking-[0] leading-[16px]">
            <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#a7b1bc] text-[12px] tracking-[0] leading-[16px]">
              Amounts{" "}
            </span>
            <span className="text-[9px]">(BTC)</span>
          </p>
          <div className="relative w-[56px] mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-secondaryblack-tint-3 text-[12px] text-right tracking-[0] leading-[20px]">
            Total
          </div>
        </div>
        <div className="flex-col gap-[2px] flex items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-[8px] pl-[16px] pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch w-full h-[28px]">
              <div className="w-[221px] left-px relative h-[28px]">
                <Overlay
                  className="!absolute !left-[109px] !top-0"
                  color="red"
                  length="one-hundred-and-twelve"
                />
                <div className="w-[221px] left-0 flex items-center justify-between pl-0 pr-[16px] py-0 absolute top-[4px]">
                  <div className="text-primary-3 relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-[12px] tracking-[0] leading-[20px] whitespace-nowrap">
                    36920.12
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-primaryangel-white text-[12px] text-right tracking-[0] leading-[20px] whitespace-nowrap">
                    0.758965
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-primaryangel-white text-[12px] text-right tracking-[0] leading-[20px] whitespace-nowrap">
                    28,020.98
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col gap-[2px] flex items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-[8px] pl-[16px] pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch w-full h-[28px]">
              <div className="w-[221px] left-px relative h-[28px]">
                <Overlay
                  className="!absolute !left-[220px] !top-0"
                  color="red"
                  length="one"
                />
                <div className="w-[221px] left-0 flex items-center justify-between pl-0 pr-[16px] py-0 absolute top-[4px]">
                  <div className="text-primary-3 relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-[12px] tracking-[0] leading-[20px] whitespace-nowrap">
                    36920.12
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-primaryangel-white text-[12px] text-right tracking-[0] leading-[20px] whitespace-nowrap">
                    0.758965
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-primaryangel-white text-[12px] text-right tracking-[0] leading-[20px] whitespace-nowrap">
                    28,020.98
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col gap-[2px] flex items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-[8px] pl-[16px] pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch w-full h-[28px]">
              <div className="w-[221px] left-px relative h-[28px]">
                <Overlay
                  className="!absolute !left-[93px] !top-0"
                  color="red"
                  length="one-hundred-and-twenty-eight"
                />
                <div className="w-[221px] left-0 flex items-center justify-between pl-0 pr-[16px] py-0 absolute top-[4px]">
                  <div className="text-primary-3 relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-[12px] tracking-[0] leading-[20px] whitespace-nowrap">
                    36920.12
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-primaryangel-white text-[12px] text-right tracking-[0] leading-[20px] whitespace-nowrap">
                    0.758965
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-primaryangel-white text-[12px] text-right tracking-[0] leading-[20px] whitespace-nowrap">
                    28,020.98
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col gap-[2px] flex items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-[8px] pl-[16px] pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch w-full h-[28px]">
              <div className="w-[221px] left-px relative h-[28px]">
                <Overlay
                  className="!absolute !left-[220px] !w-px !top-0"
                  color="red"
                  length="forty-eight"
                />
                <div className="w-[221px] left-0 flex items-center justify-between pl-0 pr-[16px] py-0 absolute top-[4px]">
                  <div className="text-primary-3 relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-[12px] tracking-[0] leading-[20px] whitespace-nowrap">
                    36920.12
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-primaryangel-white text-[12px] text-right tracking-[0] leading-[20px] whitespace-nowrap">
                    0.758965
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-primaryangel-white text-[12px] text-right tracking-[0] leading-[20px] whitespace-nowrap">
                    28,020.98
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col gap-[2px] flex items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-[8px] pl-[16px] pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch w-full h-[28px]">
              <div className="w-[236px] left-[-14px] relative h-[28px]">
                <Overlay
                  className="!absolute !left-0 !w-[236px] !top-0"
                  color="red"
                  length="one-hundred-and-ninety-six"
                />
                <div className="w-[221px] left-[15px] flex items-center justify-between pl-0 pr-[16px] py-0 absolute top-[4px]">
                  <div className="text-primary-3 relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-[12px] tracking-[0] leading-[20px] whitespace-nowrap">
                    36920.12
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-primaryangel-white text-[12px] text-right tracking-[0] leading-[20px] whitespace-nowrap">
                    0.758965
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-primaryangel-white text-[12px] text-right tracking-[0] leading-[20px] whitespace-nowrap">
                    28,020.98
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[237px] items-center justify-center gap-[24px] px-[16px] py-[12px] absolute top-[303px] left-[4px]">
        <div className="flex w-[172px] items-center gap-[8px] relative">
          <div className="text-supportsuccess relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
            36,641.20
          </div>
          <IconsArrowDownSimpleLine className="!relative !w-[16px] !h-[16px]" />
          <div className="mr-[-6.00px] text-neutrals-8 relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
            36,641.20
          </div>
        </div>
      </div>
      <div className="top-[359px] flex flex-col w-[237px] items-start gap-[4px] absolute left-[4px]">
        <div className="flex-col gap-[2px] flex items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-[8px] pl-[16px] pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch w-full h-[28px]">
              <div className="w-[221px] left-px relative h-[28px]">
                <div className="w-[220px] left-0 flex items-center justify-between pl-0 pr-[16px] py-0 absolute top-[4px]">
                  <div className="text-supportsuccess relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-[12px] tracking-[0] leading-[20px] whitespace-nowrap">
                    36920.12
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-primaryangel-white text-[12px] text-right tracking-[0] leading-[20px] whitespace-nowrap">
                    0.758965
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-primaryangel-white text-[12px] text-right tracking-[0] leading-[20px] whitespace-nowrap">
                    28,020.98
                  </div>
                </div>
                <Overlay
                  className="!absolute !left-px !bg-supportsuccess !top-0"
                  color="green"
                  length="two-hundred-and-twenty"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col gap-[2px] flex items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-[8px] pl-[16px] pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch w-full h-[28px]">
              <div className="w-[221px] left-px relative h-[28px]">
                <div className="w-[220px] left-0 flex items-center justify-between pl-0 pr-[16px] py-0 absolute top-[4px]">
                  <div className="text-supportsuccess relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-[12px] tracking-[0] leading-[20px] whitespace-nowrap">
                    36920.1
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-primaryangel-white text-[12px] text-right tracking-[0] leading-[20px] whitespace-nowrap">
                    0.758965
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-primaryangel-white text-[12px] text-right tracking-[0] leading-[20px] whitespace-nowrap">
                    28,020.98
                  </div>
                </div>
                <Overlay
                  className="!absolute !left-[61px] !bg-supportsuccess !top-0"
                  color="green"
                  length="one-hundred-and-sixty"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col gap-[2px] flex items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-[8px] pl-[16px] pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch w-full h-[28px]">
              <div className="w-[221px] left-px relative h-[28px]">
                <div className="w-[220px] left-0 flex items-center justify-between pl-0 pr-[16px] py-0 absolute top-[4px]">
                  <div className="text-supportsuccess relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-[12px] tracking-[0] leading-[20px] whitespace-nowrap">
                    36920.12
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-primaryangel-white text-[12px] text-right tracking-[0] leading-[20px] whitespace-nowrap">
                    0.758965
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-primaryangel-white text-[12px] text-right tracking-[0] leading-[20px] whitespace-nowrap">
                    28,020.98
                  </div>
                </div>
                <Overlay
                  className="!absolute !left-[93px] !bg-supportsuccess !top-0"
                  color="green"
                  length="one-hundred-and-twenty-eight"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col gap-[2px] flex items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-[8px] pl-[16px] pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch w-full h-[28px]">
              <div className="w-[220px] left-px flex items-center justify-between pl-0 pr-[16px] py-0 absolute top-[4px]">
                <div className="text-supportsuccess relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-[12px] tracking-[0] leading-[20px] whitespace-nowrap">
                  36920.12
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-primaryangel-white text-[12px] text-right tracking-[0] leading-[20px] whitespace-nowrap">
                  0.758965
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-primaryangel-white text-[12px] text-right tracking-[0] leading-[20px] whitespace-nowrap">
                  28,020.98
                </div>
              </div>
              <Overlay
                className="!absolute !left-[221px] !bg-supportsuccess !top-0"
                color="green"
                length="one"
              />
            </div>
          </div>
        </div>
        <div className="flex-col gap-[2px] flex items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-[8px] pl-[16px] pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch w-full h-[28px]">
              <div className="w-[221px] left-px relative h-[28px]">
                <div className="w-[220px] left-0 flex items-center justify-between pl-0 pr-[16px] py-0 absolute top-[4px]">
                  <div className="text-supportsuccess relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-[12px] tracking-[0] leading-[20px] whitespace-nowrap">
                    36920.12
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-primaryangel-white text-[12px] text-right tracking-[0] leading-[20px] whitespace-nowrap">
                    0.758965
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-primaryangel-white text-[12px] text-right tracking-[0] leading-[20px] whitespace-nowrap">
                    28,020.98
                  </div>
                </div>
                <Overlay
                  className="!absolute !left-[61px] !bg-supportsuccess !top-0"
                  color="green"
                  length="one-hundred-and-sixty"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col gap-[2px] flex items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-[8px] pl-[16px] pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch w-full h-[28px]">
              <div className="w-[221px] left-px relative h-[28px]">
                <div className="w-[220px] left-0 flex items-center justify-between pl-0 pr-[16px] py-0 absolute top-[4px]">
                  <div className="text-supportsuccess relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-[12px] tracking-[0] leading-[20px] whitespace-nowrap">
                    36920.12
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-primaryangel-white text-[12px] text-right tracking-[0] leading-[20px] whitespace-nowrap">
                    0.758965
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-primaryangel-white text-[12px] text-right tracking-[0] leading-[20px] whitespace-nowrap">
                    28,020.98
                  </div>
                </div>
                <Overlay
                  className="!absolute !left-[61px] !bg-supportsuccess !top-0"
                  color="green"
                  length="one-hundred-and-sixty"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SegmentedPicker
        className="!rounded-[10px] !absolute !left-[8px] !bg-[#00000029] !w-[229px] !top-[12px]"
        darkMode={false}
        optionDarkModeFalseClassName="!self-stretch !border-[unset] !rounded-[8px] !h-[unset] !flex-1 !border-[unset] !grow !bg-[#21262c] !w-[unset]"
        optionLabelClassName="!text-primaryangel-white !tracking-[0] !text-[12px] !font-medium ![font-family:'Satoshi-Medium',Helvetica] !leading-[16px] !w-[97px]"
        optionLabelClassNameOverride="!text-secondaryblack-tint-3 !tracking-[0] !text-[12px] ![font-family:'Satoshi-Medium',Helvetica] !left-[20px] !leading-[16px] !w-[unset]"
        optionText="Order Book"
        optionText1="Recent trades"
        options="two-options"
        selected="left-selected"
      
      />
    </div>
  );
};
