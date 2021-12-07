import { catalogTree } from '@/apis/indicator.api'
// 获取数据集
type catalogTreeData = {
  objectId: string | number
  value: string | number,
  label: string | number,
  topicType: string | number,
  leaf: false
}
export const getCatalogTree
  = async (parentId: string): Promise<catalogTreeData[]> => {
    const params = {
      parentId,
    }
    const [ , res ] = await catalogTree(params)
    if (res?.data) {
      return res?.data.map(item => (
        {
          objectId: item.objectId,
          value: item.id,
          label: item.topicName,
          topicType: item.topicType,
          leaf: false
        }
      ))
    }
    return []
  }