import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class TreesService {
    constructor() {
    }
    fileData = [
        {
            name: 'A1',
            children: [
                {
                    name: 'B1',
                },
                {
                    name: 'B2',
                    children: [
                        {
                            name: 'C1',
                            children: [
                                {
                                    name: 'D1',
                                },
                                {
                                    name: 'D2',
                                },
                                {
                                    name: 'D3',
                                },
                                {
                                    name: 'D2',
                                },
                                {
                                    name: 'D3',
                                },
                                {
                                    name: 'D2',
                                },
                                {
                                    name: 'D3',
                                }
                            ]
                        },
                        {
                            name: 'C2',
                            children: [
                                {
                                    name: 'D1',
                                },
                                {
                                    name: 'D2',
                                },
                                {
                                    name: 'D3',
                                }
                            ]
                        },
                        {
                            name: 'C3',
                            children: [
                                {
                                    name: 'D1',
                                },
                                {
                                    name: 'D2',
                                },
                                {
                                    name: 'D3',
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'B3',
                }
            ]
        }
    ];

    menu = [
        {
            name: '首页',
            isPer: false,
            children: [
                {
                    name: 'boss',
                    isPer: false,
                },
                {
                    name: 'finance',
                    isPer: false,
                },
                {
                    name: 'groupLeader',
                    isPer: false,
                },
                {
                    name: 'employee',
                    isPer: false,
                },
                {
                    name: 'storage-leader', isPer: false,
                },
                {
                    name: 'storage-employee', isPer: false,
                },
            ]
        },
        {
            name: '订单', isPer: false,
            children: [
                {
                    name: '待配货', isPer: false,
                },
                {
                    name: '需人工处理', isPer: false,
                    children: [
                        {
                            name: '需人工审核', isPer: false,
                        },
                        {
                            name: '有超期风险', isPer: false,
                        },
                        {
                            name: '收货信息不全', isPer: false,
                        },
                        {
                            name: '需跟踪号', isPer: false,
                        },
                        {
                            name: '商品关联失败', isPer: false,
                        }, {
                            name: '报关信息缺失', isPer: false,
                        },
                        {
                            name: '分配失败', isPer: false,
                        }, {
                            name: '运费计算失败', isPer: false,
                        }, {
                            name: '订单利润过低', isPer: false,
                        },
                        {
                            name: '缺货', isPer: false,
                        },
                        {
                            name: '物流异常', isPer: false,
                        },
                        {
                            name: '回传失败', isPer: false,
                        },
                        {
                            name: '合并订单', isPer: false,
                        },
                        {
                            name: '仓库取消发货', isPer: false,
                        },
                    ],
                },
                {
                    name: '订单列表', isPer: false,
                },
                {
                    name: '包裹列表', isPer: false,
                },
                {
                    name: '物流跟踪', isPer: false,
                },
                {
                    name: '退货列表', isPer: false,
                },


            ]
        },
        {
            name: '商品', isPer: false,
            children: [
                {
                    name: '商品信息', isPer: false,
                }
            ]
        },
        {
            name: '采购', isPer: false,
            children: [
                {
                    name: '采购建议', isPer: false,
                },
                {
                    name: '采购单', isPer: false,
                },
                {
                    name: '网络采购订单', isPer: false,
                },
            ]
        },
        {
            name: '仓库', isPer: false,
            children: [
                {
                    name: '库存数量', isPer: false,
                },
                {
                    name: '库存流水', isPer: false,
                },
                {
                    name: '仓库设置', isPer: false,
                },
                {
                    name: '收货记录', isPer: false,
                },
                {
                    name: '退件记录', isPer: false,
                },
                {
                    name: '货品拆包', isPer: false,
                },
                {
                    name: '拣货任务', isPer: false,
                },
                {
                    name: '打印面单（单品）', isPer: false,
                },
                {
                    name: '核重发货', isPer: false,
                },
                {
                    name: '二次分拣', isPer: false,
                },
                {
                    name: '多品复核', isPer: false,
                },
                {
                    name: '包裹检验', isPer: false,
                },
                {
                    name: '异常件处理', isPer: false,
                },
                {
                    name: '手持终端', isPer: false,
                },
            ]
        },
        {
            name: '物流', isPer: false,
            children: [
                {
                    name: 'API授权', isPer: false,
                },
                {
                    name: '物流方式列表', isPer: false,
                },
                {
                    name: '最大报关金额设置', isPer: false,
                }
            ]
        },
        {
            name: '规则', isPer: false,
            children: [
                {
                    name: '订单规则', isPer: false,
                },
                {
                    name: '仓库规则', isPer: false,
                },
                {
                    name: '物流分配规则', isPer: false,
                },
                {
                    name: '标记发货规则', isPer: false,
                }
            ]
        },
        {
            name: '设置', isPer: false,
            children: [
                {
                    name: '成员管理', isPer: false,
                },
                {
                    name: '角色管理', isPer: false,
                },
                {
                    name: '部门管理', isPer: false,
                },
                {
                    name: '账号授权', isPer: false,
                },
                {
                    name: '公告列表', isPer: false,
                },
                {
                    name: '员工KPI', isPer: false,
                },
                {
                    name: '个人设置', isPer: false,
                },
                {
                    name: '黑名单用户', isPer: false,
                }
            ]
        },
        {
            name: '客服', isPer: false,
            children: [
                {
                    name: '待办邮件', isPer: false,
                }
            ]
        },
        {
            name: '统计', isPer: false,
            children: [
                {
                    name: '订单统计', isPer: false,
                    children: [
                        {
                            name: '订单金额统计', isPer: false,
                        },
                        {
                            name: '退款金额统计', isPer: false,
                        },
                        {
                            name: '国家金额分布', isPer: false,
                        },
                        {
                            name: '帐号金额分布', isPer: false,
                        },
                        {
                            name: '订单数量统计', isPer: false,
                        },
                        {
                            name: '退款单量统计', isPer: false,
                        },
                        {
                            name: '国家单量分布', isPer: false,
                        },
                        {
                            name: '帐号单量分布', isPer: false,
                        },
                        {
                            name: '小组销售统计', isPer: false,
                        },
                        {
                            name: '跟踪号上网时间', isPer: false,
                        },
                        {
                            name: '跟踪号运输时间', isPer: false,
                        },
                        {
                            name: '订单运费统计', isPer: false,
                        },
                    ]
                },
                {
                    name: '采购统计', isPer: false,
                    children: [
                        {
                            name: '采购金额统计', isPer: false,
                        },
                        {
                            name: '采购订单明细', isPer: false,
                        },
                    ]
                },
                {
                    name: '仓库统计', isPer: false,
                    children: [
                        {
                            name: '渠道分布统计', isPer: false,
                        },
                        {
                            name: '包装绩效统计', isPer: false,
                        },
                        {
                            name: '捡货绩效统计', isPer: false,
                        },
                        {
                            name: '拆包绩效统计', isPer: false,
                        },
                        {
                            name: '称重绩效统计', isPer: false,
                        },
                        {
                            name: '包裹发货统计', isPer: false,
                        },
                    ]
                }
            ]
        },
        {
            name: '汇率', isPer: false,
        },
        {
            name: '系统设置', isPer: false,
        }
    ];
}
