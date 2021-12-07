import { apiPrefix } from './consts'
import { ResBody, Api } from '@bui/request'
// const model = 'indicatorTopicTree'
const url = `${apiPrefix}`

// 获取指标模型详情
// 详情接口参数
type AnalysisModelParams = {
  parentId: string,
}
// 响应体
interface AnalysisModelRes extends ResBody {
  data: AnalysisModelData[]
}
type AsyncAnalysisModelRes = [string | null, AnalysisModelRes]
type AnalysisModelData = {
  topicOwner: string,
  topicName: string,
  id: string | number,
  parentId: string | number,
  topicClass: string | number,
  objectId: string | number,
  topicDesc: string,
  topicType: string | number
}
export const catalogTree =
  (params: AnalysisModelParams): Promise<AsyncAnalysisModelRes> => 
    Api({
      url: `${url}/indicatorTopicTree/getTopicTreeAPObject`,
      method: 'GET',
      params,
    })