import { createSlice } from '@reduxjs/toolkit';

const moreTableSlice = createSlice({
    name: 'moreTable',
    initialState: {
        memberListTable:[
            { 
                colNameTable: 'ID', 
                colWidth: '60px', 
                fixedWidth: true, 
                aclName: '', 
                colNameApi: 'user_id',
                contentType: 'text', 
            },
            { 
                colNameTable: 'User Name', 
                colWidth: '200px', 
                fixedWidth: false, 
                aclName: '', 
                colNameApi: 'user_name',
                contentType: 'text',
                toCopy: 1 
            },
            { 
                colNameTable: 'Name', 
                colWidth: '150px', 
                fixedWidth: false, 
                aclName: '', 
                colNameApi: 'first_name',
                contentType: 'text', 
            },
            { 
                colNameTable: 'Company', 
                colWidth: '150px', 
                fixedWidth: false, 
                aclName: '', 
                colNameApi: 'company_name',
                contentType: 'text',  
            },
            // { 
            //     colNameTable: 'Role', 
            //     colWidth: '120px', 
            //     fixedWidth: true, 
            //     aclName: '', 
            //     colNameApi: 'role_name',
            //     contentType: 'text',  
            // },
            { 
                colNameTable: 'Member ID', 
                colWidth: '100px', 
                fixedWidth: true, 
                aclName: '', 
                colNameApi: 'member_id',
                contentType: 'text', 
            },
            { 
                colNameTable: 'Created Date', 
                colWidth: '200px', 
                fixedWidth: true, 
                aclName: '', 
                colNameApi: 'modified_date',
                contentType: 'date',
                isFomatted:false  
            },
            { 
                colNameTable: 'Status', 
                colWidth: '60px', 
                fixedWidth: true, 
                aclName: 'status column', 
                colNameApi: 'status',
                contentType: 'switch',  
            },
            { 
                colNameTable: 'Update', 
                colWidth: '70px', 
                fixedWidth: true, 
                aclName: 'update column', 
                colNameApi: '',
                contentType: 'actions',  
            }
        ],
        facebookPagesTable:[
            { 
                colNameTable: 'ID', 
                colWidth: '60px', 
                fixedWidth: true, 
                aclName: '', 
                colNameApi: 'gtf_page_id',
                contentType: 'text', 
            },
            { 
                colNameTable: 'Page ID', 
                colWidth: '170px', 
                fixedWidth: true, 
                aclName: '', 
                colNameApi: 'facebook_page_id',
                contentType: 'text',
                openModal: true 
            },
            { 
                colNameTable: 'Page Name', 
                colWidth: '200px', 
                fixedWidth: false, 
                aclName: '', 
                colNameApi: 'facebook_page_name',
                contentType: 'text', 
            },
            { 
                colNameTable: 'Token Created On', 
                colWidth: '180px', 
                fixedWidth: true, 
                aclName: '', 
                colNameApi: 'page_add_on_date',
                contentType: 'date',
                isFormatted:false 
            },
            { 
                colNameTable: 'Token Expires On', 
                colWidth: '180px', 
                fixedWidth: true, 
                aclName: '', 
                colNameApi: 'page_expiry_date',
                contentType: 'date',
                isFormatted:false  
            },
            { 
                colNameTable: 'Mapped', 
                colWidth: '70px', 
                fixedWidth: true, 
                aclName: '', 
                colNameApi: 'is_page_mapped',
                contentType: 'icons',
                iconType:'link'  
            },
            { 
                colNameTable: 'Valid', 
                colWidth: '70px', 
                fixedWidth: true, 
                aclName: '', 
                colNameApi: 'is_active',
                contentType: 'icons',  
            },
            { 
                colNameTable: 'IsActive', 
                colWidth: '70px', 
                fixedWidth: true, 
                aclName: 'status column', 
                colNameApi: 'is_active',
                contentType: 'switch',  
            },
            { 
                colNameTable: 'Update', 
                colWidth: '70px', 
                fixedWidth: true, 
                aclName: 'update column', 
                colNameApi: '',
                contentType: 'actions',  
            }
        ],
        facebookMappingTable:[
            { 
                colNameTable: 'Form ID', 
                colWidth: '150px', 
                fixedWidth: true, 
                aclName: '', 
                colNameApi: 'facebook_form_id',
                contentType: 'text', 
            },
            { 
                colNameTable: 'Form Name', 
                colWidth: '200px', 
                fixedWidth: true, 
                aclName: '', 
                colNameApi: 'facebook_form_name',
                contentType: 'text', 
            },
            { 
                colNameTable: 'Alias Name', 
                colWidth: '200px', 
                fixedWidth: false, 
                aclName: '', 
                colNameApi: 'facebook_form_alias_name',
                contentType: 'text', 
            },
            { 
                colNameTable: 'Lead Count', 
                colWidth: '100px', 
                fixedWidth: true, 
                aclName: '', 
                colNameApi: 'facebook_form_leads_count',
                contentType: 'text', 
            },
            { 
                colNameTable: 'Created On', 
                colWidth: '180px', 
                fixedWidth: true, 
                aclName: '', 
                colNameApi: 'page_expiry_date',
                contentType: 'date',
                isFormatted:false  
            },
            { 
                colNameTable: 'Fetch On', 
                colWidth: '180px', 
                fixedWidth: true, 
                aclName: '', 
                colNameApi: 'last_leads_fetch_date',
                contentType: 'date',
                isFormatted:false  
            },
            { 
                colNameTable: 'Mapped', 
                colWidth: '120px', 
                fixedWidth: true, 
                aclName: '', 
                colNameApi: 'is_form_mapped',
                contentType: 'icons',
                position:'facebook-mapping'  
            },
            { 
                colNameTable: 'Actions', 
                colWidth: '200px', 
                fixedWidth: true, 
                aclName: '', 
                colNameApi: 'is_active',
                contentType: 'actions',
                position:'facebook-mapping'  
            },
        ],
        aclTable:[
            { 
                colNameTable: 'Type', 
                colWidth: '200px', 
                fixedWidth: false, 
                aclName: '', 
                colNameApi: 'featuretype',
                contentType: 'text', 
            },
            { 
                colNameTable: 'Feature Name',
                colWidth: '200px', 
                fixedWidth: false, 
                aclName: '', 
                colNameApi: 'FeatureName',
                contentType: 'text', 
            },
            { 
                colNameTable: 'Admin', 
                colWidth: '100px', 
                fixedWidth: false, 
                aclName: '', 
                colNameApi: 'Admin-1',
                contentType: 'checkbox',
                isDisabled: true 
            },
            { 
                colNameTable: 'Advertisor', 
                colWidth: '100px', 
                fixedWidth: false, 
                aclName: '', 
                colNameApi: 'Advertisor-7',
                contentType: 'checkbox',
                isDisabled: false 
            },
            { 
                colNameTable: 'Client', 
                colWidth: '100px', 
                fixedWidth: false, 
                aclName: '', 
                colNameApi: 'Client-2',
                contentType: 'checkbox',
                isDisabled: false  
            },
            { 
                colNameTable: 'Designer', 
                colWidth: '100px', 
                fixedWidth: false, 
                aclName: '', 
                colNameApi: 'Designer-6',
                contentType: 'checkbox',
                isDisabled: false  
            },
            { 
                colNameTable: 'Developer', 
                colWidth: '100px', 
                fixedWidth: false, 
                aclName: '', 
                colNameApi: 'Developer-4',
                contentType: 'checkbox',
                isDisabled: false
            },
            { 
                colNameTable: 'Manager', 
                colWidth: '100px', 
                fixedWidth: false, 
                aclName: '', 
                colNameApi: 'Manager-5',
                contentType: 'checkbox',
                isDisabled: false  
            }
        ],
        spamMarkingTable:[
            { 
                colNameTable: 'ID', 
                colWidth: '60px', 
                fixedWidth: true, 
                aclName: '', 
                colNameApi: 'gtf_page_id',
                contentType: 'text', 
            },
            { 
                colNameTable: 'Client', 
                colWidth: '200px', 
                fixedWidth: true, 
                aclName: '', 
                colNameApi: 'facebook_page_id',
                contentType: 'text', 
            },
            { 
                colNameTable: 'Project', 
                colWidth: '200px', 
                fixedWidth: false, 
                aclName: '', 
                colNameApi: 'facebook_page_name',
                contentType: 'text', 
            },
            { 
                colNameTable: 'IP Address', 
                colWidth: '120px', 
                fixedWidth: true, 
                aclName: '', 
                colNameApi: 'page_add_on_date',
                contentType: 'text',
                isFormatted:false 
            },
            { 
                colNameTable: 'Marked By', 
                colWidth: '200px', 
                fixedWidth: true, 
                aclName: '', 
                colNameApi: 'page_expiry_date',
                contentType: 'text',                  
            },
            { 
                colNameTable: 'Date', 
                colWidth: '170px', 
                fixedWidth: true, 
                aclName: '', 
                colNameApi: 'is_active',
                contentType: 'date',
                isFormatted:false  
            },
            { 
                colNameTable: 'Spam Date', 
                colWidth: '170px', 
                fixedWidth: true, 
                aclName: 'status column', 
                colNameApi: 'is_active',
                contentType: 'date',
                isFormatted:false  
            }
        ],
        fraudClicksTable:[
            { 
                colNameTable: 'ID', 
                colWidth: '60px', 
                fixedWidth: true, 
                aclName: '', 
                colNameApi: 'gtf_page_id',
                contentType: 'text', 
            },
            { 
                colNameTable: 'AgentID', 
                colWidth: '80px', 
                fixedWidth: true, 
                aclName: '', 
                colNameApi: 'facebook_page_id',
                contentType: 'text', 
            },
            { 
                colNameTable: 'URL', 
                colWidth: '250px', 
                fixedWidth: false, 
                aclName: '', 
                colNameApi: 'facebook_page_name',
                contentType: 'text', 
            },
            { 
                colNameTable: 'Project', 
                colWidth: '250px', 
                fixedWidth: false, 
                aclName: '', 
                colNameApi: 'page_add_on_date',
                contentType: 'text',
                isFormatted:false 
            },
            { 
                colNameTable: 'IP', 
                colWidth: '150px', 
                fixedWidth: true, 
                aclName: '', 
                colNameApi: 'page_expiry_date',
                contentType: 'text',                  
            },
            { 
                colNameTable: 'Time', 
                colWidth: '150px', 
                fixedWidth: true, 
                aclName: '', 
                colNameApi: 'is_active',
                contentType: 'text'  
            },
            { 
                colNameTable: 'Count', 
                colWidth: '60px', 
                fixedWidth: true, 
                aclName: 'status column', 
                colNameApi: 'is_active',
                contentType: 'text'  
            }
        ],
    }
})

export const {} = moreTableSlice.actions;
export default moreTableSlice.reducer;