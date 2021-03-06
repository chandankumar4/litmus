export default [
  {
    workflowID: 0,
    title: 'node-cpu-hog',
    urlToIcon:
      'https://hub.litmuschaos.io/api/icon/1.7.0/generic/node-cpu-hog.png',
    chaosWkfCRDLink:
      'https://raw.githubusercontent.com/litmuschaos/chaos-charts/master/workflows/node-cpu-hog/workflow.yaml',

    gitLink:
      'https://github.com/litmuschaos/chaos-charts/blob/master/workflows/node-cpu-hog/workflow.yaml',
    provider: 'MayaData',
    description: 'Injects a CPU spike on a node',
    totalRuns: 5300,
    isCustom: false,
    details:
      'This experiment causes CPU resource exhaustion on the Kubernetes node.' +
      'The experiment aims to verify resiliency of applications whose replicas may be ' +
      'evicted on account on nodes turning unschedulable (Not Ready) due to lack of CPU resources.',
    recommendation:
      'Check whether the application is resilient to the CPU hog, once the experiment (job) is completed.' +
      'The ChaosResult resource name is derived like this: <ChaosEngine-Name>-<ChaosExperiment-Name>',
    experimentinfo:
      'Node CPU Hog can be effected using the chaos library: litmus, ' +
      'The desired chaos library can be selected by setting litmus as value for the env variable LIB',
  },
  {
    workflowID: 1,
    title: 'node-memory-hog',
    urlToIcon:
      'https://hub.litmuschaos.io/api/icon/1.7.0/generic/node-memory-hog.png',
    chaosWkfCRDLink:
      'https://raw.githubusercontent.com/litmuschaos/chaos-charts/master/workflows/node-memory-hog/workflow.yaml',

    gitLink:
      'https://github.com/litmuschaos/chaos-charts/blob/master/workflows/node-memory-hog/workflow.yaml',
    provider: 'MayaData',
    description: 'Injects a memory spike on a node',
    totalRuns: 4300,
    isCustom: false,
    details:
      ' This experiment causes Memory resource exhaustion on the Kubernetes node.' +
      'The experiment aims to verify resiliency of applications whose replicas may be ' +
      'evicted on account on nodes turning unschedulable (Not Ready) due to lack of Memory resources. ' +
      'The Memory chaos is injected using a job running the linux stress-ng tool (a workload generator). ' +
      'The chaos is effected for a period equalling the TOTAL_CHAOS_DURATION and upto ' +
      'MEMORY_PERCENTAGE(out of 100). Application implies services. Can be reframed as: Tests application ' +
      'resiliency upon replica evictions caused due to lack of Memory resources ',
    recommendation:
      'This Chaos Experiment can be triggered by creating a ChaosEngine resource on the cluster. ' +
      'To understand the values to provide in a ChaosEngine specification, refer Getting Started Follow ' +
      'the steps in the sections below to create the chaosServiceAccount,' +
      'prepare the ChaosEngine & execute the experiment.',
    experimentinfo:
      'Provide the application info in spec.appinfo Provide the auxiliary applications ' +
      'info (ns & labels) in spec.auxiliaryAppInfo',
  },
  {
    workflowID: 2,
    title: 'pod-cpu-hog',
    urlToIcon:
      'https://hub.litmuschaos.io/api/icon/1.7.0/generic/pod-cpu-hog.png',
    chaosWkfCRDLink:
      'https://raw.githubusercontent.com/litmuschaos/chaos-charts/master/workflows/pod-cpu-hog/workflow.yaml',

    gitLink:
      'https://github.com/litmuschaos/chaos-charts/blob/master/workflows/pod-cpu-hog/workflow.yaml',
    provider: 'MayaData',
    description: 'Injects a CPU spike on a pod',
    totalRuns: 5000,
    isCustom: false,
    details:
      'This experiment consumes the CPU resources on the application container (upward of 80%) ' +
      'on specified number of cores It simulates conditions where app pods experience CPU spikes ' +
      'either due to expected/undesired processes thereby testing how the overall application ' +
      'stack behaves when this occurs.',
    recommendation:
      'Check whether the application stack is resilient to CPU spikes on the app replica, ' +
      'once the experiment (job) is completed. ' +
      'The ChaosResult resource name is derived like this: <ChaosEngine-Name>-<ChaosExperiment-Name> ' +
      'kubectl describe chaosresult nginx-chaos-pod-cpu-hog -n <application-namespace>',
    experimentinfo:
      'Use this sample RBAC manifest to create a chaosServiceAccount in the desired (app) namespace. ' +
      'This example consists of the minimum necessary role permissions to execute the experiment.',
  },
  {
    workflowID: 3,
    title: 'pod-memory-hog',
    urlToIcon:
      'https://hub.litmuschaos.io/api/icon/1.7.0/generic/pod-memory-hog.png',
    chaosWkfCRDLink:
      'https://raw.githubusercontent.com/litmuschaos/chaos-charts/master/workflows/pod-memory-hog/workflow.yaml',

    gitLink:
      'https://github.com/litmuschaos/chaos-charts/blob/master/workflows/pod-memory-hog/workflow.yaml',
    provider: 'MayaData',
    description: 'Injects a memory spike on a pod',
    totalRuns: 3005,
    isCustom: false,
    details:
      'This experiment consumes the Memory resources on the application container on specified memory in' +
      'megabytes. It simulates conditions where app pods experience Memory spikes either due to ' +
      'expected/undesired processes thereby testing how the overall application stack behaves when this occurs.',
    recommendation:
      'Check whether the application stack is resilient to Memory spikes on the app replica, ' +
      'once the experiment (job) is completed. The ChaosResult resource name is derived ' +
      'like this: <ChaosEngine-Name>-<ChaosExperiment-Name>. ' +
      'kubectl describe chaosresult nginx-chaos-pod-memory-hog -n <application-namespace>',
    experimentinfo:
      'Pod Memory can be effected using the chaos library: litmus',
  },
  {
    workflowID: 4,
    title: 'pod-delete',
    urlToIcon:
      'https://hub.litmuschaos.io/api/icon/1.7.0/generic/pod-delete.png',
    chaosWkfCRDLink:
      'https://raw.githubusercontent.com/litmuschaos/chaos-charts/master/workflows/pod-delete/workflow.yaml',

    gitLink:
      'https://github.com/litmuschaos/chaos-charts/blob/master/workflows/pod-delete/workflow.yaml',
    provider: 'MayaData',
    description: 'Deletes a pod',
    totalRuns: 6700,
    isCustom: false,
    details:
      'Causes (forced/graceful) pod failure of specific/random replicas of an application resources ' +
      'Tests deployment sanity (replica availability & uninterrupted service) and recovery workflow ' +
      'of the application The pod delete by Powerfulseal is only supporting single pod ' +
      'failure (kill_count = 1).',
    recommendation:
      'Check whether the application is resilient to the pod failure, once the experiment (job) is completed. ' +
      'The ChaosResult resource name is derived like this: <ChaosEngine-Name>-<ChaosExperiment-Name>. ' +
      'kubectl describe chaosresult nginx-chaos-pod-delete -n <application-namespace>',
    experimentinfo:
      'Provide the application info in spec.appinfo Override the experiment tunables if desired ' +
      'in experiments.spec.components.env ',
  },
];
