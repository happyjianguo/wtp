export default {
  route: {
    dashboard: '首页',
    documentation: '文档',
    user: '用户管理',
    user_list: '用户列表',
    user_permission: '用户权限',
    app: '项目管理',
    app_list: '项目列表',
    cluster: '集群管理',
    cluster_list: '集群列表',
    wtp: '线程池管理',
    wtp_list: '线程池列表',
    log: '日志',
    wtpLog_list: '线程池日志',
    errorPages: '错误页面',
    page401: '401',
    page404: '404',
    errorLog: '错误日志'
  },
  navbar: {
    github: '项目地址',
    logOut: '退出登录',
    size: '布局大小'
  },
  login: {
    title: '系统登录',
    logIn: '登录',
    username: '账号',
    password: '密码'
  },
  tagsView: {
    refresh: '刷新',
    close: '关闭',
    closeOthers: '关闭其它',
    closeAll: '关闭所有'
  },
  settings: {
    title: '系统布局配置',
    theme: '主题色',
    tagsView: '开启 Tags-View',
    fixedHeader: '固定 Header',
    sidebarLogo: '侧边栏 Logo'
  },
  documentation: {
    documentation: '文档',
    github: 'Github 地址',
    gitee: 'Gitee 地址',
    usage: '接入指南',
    FAQ: '常见问题'
  },
  app: {
    appId: 'AppId',
    search: '搜索',
    add: '创建App',
    update: '修改App',
    id: 'ID',
    appName: 'App名称',
    created: '创建时间',
    edit: '编辑',
    del: '删除',
    del_confirm_button_text: '好的',
    del_cancel_button_text: '不用了',
    del_title: '删除后不可恢复,确定删除吗？',
    cancel: '取 消',
    confirm: '确 定',
    parameter: '参数不能为空',
    success: '成功',
    fail: '失败'
  },
  cluster: {
    appId: 'AppId',
    searchable: 'AppId (可搜索)',
    clusterId: 'ClusterId',
    search: '搜索',
    add: '创建Cluster',
    update: '修改Cluster',
    id: 'ID',
    clusterName: '集群名',
    onLine: '在线机器',
    look: '查看',
    created: '创建时间',
    edit: '编辑',
    del: '删除',
    del_confirm_button_text: '好的',
    del_cancel_button_text: '不用了',
    del_title: '删除后不可恢复,确定删除吗？',
    cancel: '取 消',
    confirm: '确 定',
    ip: 'IP',
    last_pull_time: '上次拉取配置时间',
    registration_time: '注册时间',
    parameter: '参数不能为空',
    success: '成功',
    fail: '失败'
  },
  user: {
    nickname: '昵称',
    username: '用户名',
    phone: '手机号',
    email: '邮箱',
    search: '搜索',
    add: '创建用户',
    update: '修改用户',
    userId: '用户ID',
    avatar: '头像',
    role: '角色',
    status: '状态',
    created: '创建时间',
    password: '密码',
    permission: '授权',
    edit: '编辑',
    cancel: '取 消',
    confirm: '确 定',
    select: '请选择',
    parameter: '参数不能为空',
    success: '成功',
    fail: '失败'
  },
  permission: {
    authorized_appId: '授权AppId',
    authorized_title1: '未授权',
    authorized_title2: '已授权',
    appId: 'AppId',
    specific_authorization: 'AppId具体授权',
    empty_text: '无数据',
    success: '成功',
    fail: '失败'
  },
  wtp: {
    appId_searchable: 'AppId (可搜索)',
    clusterId_searchable: 'ClusterId (可搜索)',
    name: '线程池名称',
    search: '搜索',
    add: '创建线程池',
    onLine: '在线机器',
    wtpId: 'ID',
    appId: 'AppId',
    clusterId: 'ClusterId',
    title: '描述',
    corePoolSize: '核心线程数',
    maximumPoolSize: '最大线程数',
    keepAliveSeconds: '回收时间(秒)',
    queueCapacity: '队列长度',
    queueName: '队列名称',
    rejectedExecutionHandlerName: 'rejected处理名称',
    edit: '编辑',
    del: '删除',
    del_confirm_button_text: '好的',
    del_cancel_button_text: '不用了',
    del_title: '删除后不可恢复,确定删除吗？',
    update_title: '确定修改吗？',
    cancel: '取 消',
    confirm: '确 定',
    searchable: '可搜索',
    last_log: '最后一条日志',
    log: '日志',
    sync_title: '同步后当前配置将覆盖被同步的cluster,确定同步吗？',
    sync_content: '同步配置到其他Cluster',
    sync: '同步',
    report_content: '最近30分钟报表',
    report: '报表',
    SynchronousQueueAndLinkedTransferQueue: '当前 queueName 不支持设置queueCapacity,也不会生效.',
    PriorityBlockingQueue: 'PriorityBlockingQueue 的 queueCapacity 是队列初始长度, 并非最大长度.',
    ownerName: '负责人',
    alarmEmail: '负责人邮箱',
    openAlarm: '是否告警',
    poolAlarmThreshold: '线程告警(%)',
    queueAlarmThreshold: '队列容量告警(%)',
    queueAlarmThreshold_title: '当前 queueName 不支持设置队列容量告警.',
    queueName_title: '（谨慎）当前 queueName 不支持动态修改队列长度 ，需重启项目，才能生效.',
    queueName_title2: '（谨慎）修改 queueName 需重启项目，才能生效',
    update: '修改Wtp',
    activeCount: '活跃线程数',
    threadRate: '线程利用率',
    completedTaskCount: '完成任务数',
    queueLength: '队列长度',
    queueSize: '排队长度',
    queueRemainingCapacity: '剩余长度',
    queueRate: '队列利用率',
    rejectedExecutionCount: 'rejected次数',
    totalTime: '总执行时间',
    averageTime: '平均执行时间',
    logTime: '日志时间',
    ip: 'IP',
    last_pull_time: '上次拉取配置时间',
    registration_time: '注册时间',
    select: '请选择',
    check_all: '全选',
    no_log: '无日志',
    no_online: '无在线机器',
    not_empty: '不能为空',
    not_greater: '不能大于',
    unselected: '未选择',
    success: '成功',
    fail: '失败',
    thread: '线程',
    queue: '队列',
    use_rate: '利用率'
  },
  wtpLog: {
    appId_searchable: 'AppId (可搜索)',
    clusterId_searchable: 'ClusterId (可搜索)',
    name: '线程池名称',
    search: '搜索',
    start_date: '开始时间',
    end_date: '结束时间',
    ip: 'IP',
    latest_week: '最近一周',
    last_month: '最近一个月',
    last_three_months: '最近三个月',
    largestPoolSize: '最大创建线程数',
    poolSize: '当前线程数',
    taskCount: '完成任务总数(约)',
    maximumTime: '最大执行时间',
    created: '创建时间',
    wtpId: 'ID',
    appId: 'AppId',
    clusterId: 'ClusterId',
    corePoolSize: '核心线程数',
    maximumPoolSize: '最大线程数',
    keepAliveSeconds: '回收时间(秒)',
    queueCapacity: '队列长度',
    queueName: '队列名称',
    activeCount: '活跃线程数',
    threadRate: '线程利用率',
    completedTaskCount: '完成任务数',
    queueLength: '队列长度',
    queueSize: '排队长度',
    queueRemainingCapacity: '剩余长度',
    queueRate: '队列利用率',
    rejectedExecutionCount: 'rejected次',
    totalTime: '总执行时间',
    averageTime: '平均执行时间',
    logTime: '日志时间'
  }
}
