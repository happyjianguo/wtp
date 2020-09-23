export default {
  route: {
    dashboard: 'Dashboard',
    documentation: 'Documentation',
    user: 'User',
    user_list: 'User List',
    user_permission: 'User Permission',
    app: 'Project',
    app_list: 'Project List',
    cluster: 'Cluster',
    cluster_list: 'Cluster List',
    wtp: 'Thread Pool',
    wtp_list: 'Thread Pool List',
    log: 'Log',
    wtpLog_list: 'Thread Pool Log',
    errorPages: 'Error Pages',
    page401: '401',
    page404: '404',
    errorLog: 'Error Log'
  },
  navbar: {
    github: 'Github',
    logOut: 'Log Out',
    size: 'Global Size'
  },
  login: {
    title: 'Login Form',
    logIn: 'Login',
    username: 'Username',
    password: 'Password'
  },
  tagsView: {
    refresh: 'Refresh',
    close: 'Close',
    closeOthers: 'Close Others',
    closeAll: 'Close All'
  },
  settings: {
    title: 'Page style setting',
    theme: 'Theme Color',
    tagsView: 'Open Tags-View',
    fixedHeader: 'Fixed Header',
    sidebarLogo: 'Sidebar Logo'
  },
  documentation: {
    documentation: 'Documentation',
    github: 'Github Repository'
  },
  app: {
    appId: 'appId',
    search: 'search',
    add: 'New App',
    update: 'edit App',
    id: 'ID',
    appName: 'App Name',
    created: 'Creation Time',
    edit: 'edit',
    del: 'del',
    del_confirm_button_text: 'confirm',
    del_cancel_button_text: 'cancel',
    del_title: 'Unrecoverable after deletion, are you sure to delete?',
    cancel: 'cancel',
    confirm: 'confirm',
    parameter: 'The parameter cannot be null',
    success: 'success',
    fail: 'fail'
  },
  cluster: {
    appId: 'AppId',
    searchable: 'AppId (searchable)',
    clusterId: 'ClusterId',
    search: 'search',
    add: 'New Cluster',
    update: 'Edit Cluster',
    id: 'ID',
    clusterName: 'Cluster Name',
    onLine: 'onLine',
    look: 'look',
    created: 'Creation Time',
    edit: 'edit',
    del: 'del',
    del_confirm_button_text: 'confirm',
    del_cancel_button_text: 'cancel',
    del_title: 'Unrecoverable after deletion, are you sure to delete?',
    cancel: 'cancel',
    confirm: 'confirm',
    ip: 'IP',
    last_pull_time: 'Last pull configuration time',
    registration_time: 'registration time',
    parameter: 'The parameter cannot be null',
    success: 'success',
    fail: 'fail'
  },
  user: {
    nickname: 'nickname',
    username: 'username',
    phone: 'phone',
    email: 'email',
    search: 'search',
    add: 'New user',
    update: 'Edit User',
    userId: 'UserId',
    avatar: 'avatar',
    role: 'role',
    status: 'status',
    created: 'Creation Time',
    password: 'password',
    permission: 'permission',
    edit: 'edit',
    cancel: 'cancel',
    confirm: 'confirm',
    select: 'please select',
    parameter: 'The parameter cannot be null',
    success: 'success',
    fail: 'fail'
  },
  wtp: {
    appId_searchable: 'AppId (searchable)',
    clusterId_searchable: 'ClusterId (searchable)',
    name: 'Pool Name',
    search: 'search',
    add: 'New Wtp',
    onLine: 'onLine',
    wtpId: 'ID',
    appId: 'AppId',
    clusterId: 'ClusterId',
    title: 'title',
    corePoolSize: 'corePoolSize',
    maximumPoolSize: 'maximumPoolSize',
    keepAliveSeconds: 'keepAliveSeconds',
    queueCapacity: 'queue capacity',
    queueName: 'queue name',
    rejectedExecutionHandlerName: 'rejected name',
    edit: 'edit',
    del: 'del',
    del_confirm_button_text: 'confirm',
    del_cancel_button_text: 'cancel',
    del_title: 'Unrecoverable after deletion, are you sure to delete?',
    update_title: 'Are you sure about the modification?',
    cancel: 'cancel',
    confirm: 'confirm',
    searchable: 'searchable',
    last_log: 'last log',
    log: 'log',
    sync_title: 'After synchronization, the current configuration will overwrite the cluster to be synchronized. Is synchronization ok?',
    sync_content: 'Synchronize configuration to other Clusters',
    sync: 'sync',
    report_content: 'Last 30 minutes report',
    report: 'report',
    SynchronousQueueAndLinkedTransferQueue: 'The current queueName does not support setting up queueCapacity, and it will not take effect.',
    PriorityBlockingQueue: 'The queueCapacity of PriorityBlockingQueue is the initial length of the queue, not the maximum.',
    ownerName: 'owner name',
    alarmEmail: 'owner email',
    openAlarm: 'Whether the alarm',
    poolAlarmThreshold: 'Thread alarm (%)',
    queueAlarmThreshold: 'Queue alarm (%)',
    queueAlarmThreshold_title: 'The current queueName does not support setting queue capacity alarm.',
    queueName_title: '(Caution) The current queueName does not support dynamic changes to the queue length, which requires a restart of the project to take effect.',
    queueName_title2: 'Modification of queueName requires a restart of the project to take effect',
    update: 'Edit Wtp',
    activeCount: 'active threads',
    threadRate: 'thread use rate',
    completedTaskCount: 'completed task count',
    queueLength: 'queue length',
    queueSize: 'queue size',
    queueRemainingCapacity: 'queue remaining capacity',
    queueRate: 'queue use rate',
    rejectedExecutionCount: 'rejected number',
    totalTime: 'total execution time',
    averageTime: 'average execution time',
    logTime: 'log time',
    ip: 'IP',
    last_pull_time: 'last pull config time',
    registration_time: 'registration time',
    select: 'please select',
    check_all: 'check all',
    no_log: 'no log',
    no_online: 'no online',
    not_empty: 'not empty',
    not_greater: 'not greater',
    unselected: 'unselected',
    success: 'success',
    fail: 'fail',
    thread: 'thread',
    queue: 'queue',
    use_rate: 'use rate'
  }
}