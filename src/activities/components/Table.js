import React from "react";

export default function Table({currentItems}) {
    const tableType = [
        {
            colNameApi:'Activity Master: Activity Master Number',
            colWidth:'300px',
            fixedWidth:true,
            contentType:'text'
        },
        {
            colNameApi:'Zone',
            colWidth:'300px',
            fixedWidth:true,
            contentType:'text'
        },
        {
            colNameApi:'Activity Code',
            colWidth:'300px',
            fixedWidth:true,
            contentType:'text'
        },
        {
            colNameApi:'Activity Name',
            colWidth:'300px',
            fixedWidth:true,
            contentType:'text'
        },
        {
            colNameApi:'Activity Name Arabic',
            colWidth:'300px',
            fixedWidth:true,
            contentType:'text'
        },
        {
            colNameApi:'Status',
            colWidth:'100px',
            fixedWidth:true,
            contentType:'text'
        },
        {
            colNameApi:'Minimum Share Capital',
            colWidth:'100px',
            fixedWidth:true,
            contentType:'text'
        },
        {
            colNameApi:'License Type',
            colWidth:'100px',
            fixedWidth:true,
            contentType:'text'
        },
        {
            colNameApi:'License Type Arabic',
            colWidth:'100px',
            fixedWidth:true,
            contentType:'text'
        },
        {
            colNameApi:'Is Not Allowed For Coworking (ESR)',
            colWidth:'100px',
            fixedWidth:true,
            contentType:'text'
        },
        {
            colNameApi:'RAKEZ HSE Risk Classification',
            colWidth:'100px',
            fixedWidth:true,
            contentType:'text'
        },
        {
            colNameApi:'Compliance Risk Rating',
            colWidth:'100px',
            fixedWidth:true,
            contentType:'text'
        },
        {
            colNameApi:'Is Special',
            colWidth:'100px',
            fixedWidth:true,
            contentType:'text'
        },
        {
            colNameApi:'Activity Price',
            colWidth:'100px',
            fixedWidth:true,
            contentType:'text'
        },
        {
            colNameApi:'Activity Group',
            colWidth:'100px',
            fixedWidth:true,
            contentType:'text'
        },
        {
            colNameApi:'Activity Group Arabic',
            colWidth:'100px',
            fixedWidth:true,
            contentType:'text'
        },
        {
            colNameApi:'Segment Name English',
            colWidth:'100px',
            fixedWidth:true,
            contentType:'text'
        },
        {
            colNameApi:'Segment Name Arabic',
            colWidth:'100px',
            fixedWidth:true,
            contentType:'text'
        },
        {
            colNameApi:'Description',
            colWidth:'100px',
            fixedWidth:true,
            contentType:'text'
        },
        {
            colNameApi:'Description Arabic',
            colWidth:'100px',
            fixedWidth:true,
            contentType:'text'
        },
        {
            colNameApi:'Qualification Requirement',
            colWidth:'100px',
            fixedWidth:true,
            contentType:'text'
        },
        {
            colNameApi:'Documents Required',
            colWidth:'100px',
            fixedWidth:true,
            contentType:'text'
        }
    ]
  return (
    <>
      <div className="border rounded-md px-2 h-full relative overflow-scroll shadow-md">
        {/* table header */}
        <div
          className="flex items-center h-[36px] border-b border-black/70 text-[14px] sticky top-0 bg-white min-w-[1200px] text-left"
          style={{ zIndex: 2 }}
        >
          {/* get table head from predefined array  */}
          {tableType?.map((item) => {
            //access control check
              return (
                <div
                  className={`px-2 font-semibold basis-[${item.colWidth}] ${ item.fixedWidth ? "grow-0 shrink-0" : "grow shrink" }`
                }
                >
                  {item.colNameApi}
                </div>
              );
          })}
        </div>
        {/* table body  */}
        <div className="min-w-[1200px]">
          {currentItems?.map((item,index) => {
            // table body row
            return (
              <div
                className="flex overflow-hidden items-center min-w-full font-semibold h-[40px] border-b border-black/20 text-[13px]"
                key={item['Activity Code']}
              >
                {tableType?.map((tableItem) => {
                  //access control
                    return (
                      // check which type of table data to show
                      <div
                        className={`${tableItem.colNameTable === 'Mapped' ? '' : 'ellipsis'} px-2 basis-[${tableItem.colWidth}] ${
                          tableItem.fixedWidth
                            ? "grow-0 shrink-0"
                            : "grow shrink-0"
                        }`}
                      >

                        {/* plain text  */}
                        {tableItem.contentType === "text" ? 
                        (
                          <p className={`flex items-center gap-[6px] cursor-pointer`} title={item[tableItem.colNameApi]}>
                            <span className="ellipsis">{item[tableItem.colNameApi]}</span>
                          </p>
                        ) : null}
                      </div>
                    );

                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}