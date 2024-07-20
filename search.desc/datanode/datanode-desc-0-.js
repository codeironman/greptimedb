searchState.loadedDescShard("datanode", 0, "Datanode configurations\nDatanode implementation.\nobject storage utilities\nRegionAliveKeeper manages all CountdownTaskHandles.\nReset countdown deadline to the given instance. (NextRole, …\nStart this countdown task. The first deadline will be set …\nCloses staled regions.\nRemoves the countdown task for a specific region.\nThe epoch when RegionAliveKeeper is created. It’s used …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns an empty RegionAliveKeeper.\nCreates a new CountdownTaskHandle and starts the countdown …\nAdd the countdown task for a specific region. It will be …\nRenews the lease of regions to <code>deadline</code>.\nStarts the CountdownTask, it will be ignored if the task …\nDefault data home in file storage\nObject storage config\nStorage engine config\nThe cache capacity in bytes\nThe local file cache directory\nThe working directory of database\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\n<code>None</code> stands for no limit.\nMax retry times of procedure.\nOptions for different store engines.\nInitial retry delay of procedures, increases exponentially.\nDeprecated options, please use the new options instead.\nDatanode service.\nBuilds KafkaLogStore.\nBuilds MitoEngine according to options.\nBuilds ObjectStoreManager from StorageConfig.\nBuilds RaftEngineLogStore.\nBuilds RegionEngineRef from <code>store_engine</code> section in <code>opts</code>\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\n<code>None</code> stands for no limit.\nMax retry times of procedure.\n<code>kv_backend</code> is optional. If absent, the builder will try to …\nOpen all regions belong to this datanode.\nInitial retry delay of procedures, increases exponentially.\nIf <code>leases_notifier</code> exists, it waits until leases have been …\nSNAFU context selector for the <code>Error::AsyncTaskExecute</code> …\nSNAFU context selector for the <code>Error::BuildMitoEngine</code> …\nSNAFU context selector for the <code>Error::BuildRegionRequests</code> …\nSNAFU context selector for the <code>Error::CatalogNotFound</code> …\nSNAFU context selector for the <code>Error::Catalog</code> variant\nSNAFU context selector for the …\nSNAFU context selector for the …\nSNAFU context selector for the <code>Error::CreateDir</code> variant\nSNAFU context selector for the <code>Error::DataFusion</code> variant\nSNAFU context selector for the <code>Error::DatabaseNotFound</code> …\nSNAFU context selector for the <code>Error::DecodeLogicalPlan</code> …\nSNAFU context selector for the <code>Error::Delete</code> variant\nContains the error value\nBusiness error of datanode.\nSNAFU context selector for the <code>Error::ExecuteLogicalPlan</code> …\nSNAFU context selector for the <code>Error::FindLogicalRegions</code> …\nSNAFU context selector for the <code>Error::GetMetadata</code> variant\nSNAFU context selector for the <code>Error::GetRegionMetadata</code> …\nSNAFU context selector for the …\nSNAFU context selector for the …\nSNAFU context selector for the <code>Error::HandleRegionRequest</code> …\nSNAFU context selector for the <code>Error::IllegalPrimaryKeysDef</code>…\nSNAFU context selector for the <code>Error::InitBackend</code> variant\nSNAFU context selector for the <code>Error::InvalidSql</code> variant\nSNAFU context selector for the <code>Error::KeyColumnNotFound</code> …\nSNAFU context selector for the <code>Error::MetaClientInit</code> …\nSNAFU context selector for the <code>Error::MissingKvBackend</code> …\nSNAFU context selector for the <code>Error::MissingNodeId</code> variant\nSNAFU context selector for the <code>Error::MissingRequiredField</code> …\nSNAFU context selector for the …\nSNAFU context selector for the <code>Error::MissingWalDirConfig</code> …\nSNAFU context selector for the <code>Error::NewPlanDecoder</code> …\nSNAFU context selector for the <code>Error::NotSupportSql</code> variant\nContains the success value\nSNAFU context selector for the <code>Error::OpenLogStore</code> variant\nSNAFU context selector for the <code>Error::ParseAddr</code> variant\nSNAFU context selector for the <code>Error::PayloadNotExist</code> …\nSNAFU context selector for the <code>Error::RegionBusy</code> variant\nSNAFU context selector for the <code>Error::RegionEngineNotFound</code> …\nSNAFU context selector for the <code>Error::RegionNotFound</code> …\nSNAFU context selector for the <code>Error::RegionNotReady</code> …\nSNAFU context selector for the <code>Error::RemoveDir</code> variant\nSNAFU context selector for the <code>Error::RuntimeResource</code> …\nSNAFU context selector for the <code>Error::SchemaExists</code> variant\nSNAFU context selector for the <code>Error::SchemaNotFound</code> …\nSNAFU context selector for the <code>Error::ShutdownInstance</code> …\nSNAFU context selector for the <code>Error::ShutdownServer</code> …\nSNAFU context selector for the <code>Error::StartServer</code> variant\nSNAFU context selector for the <code>Error::StopRegionEngine</code> …\nSNAFU context selector for the …\nSNAFU context selector for the <code>Error::TomlFormat</code> variant\nSNAFU context selector for the <code>Error::Unexpected</code> variant\nSNAFU context selector for the …\nSNAFU context selector for the <code>Error::UnsupportedOutput</code> …\nSNAFU context selector for the <code>Error::WatchAsyncTaskChange</code> …\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\n<code>ToString::to_string</code>, but without panic on OOM.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalled <em>after</em> a region was closed.\nCalled <em>after</em> a new region was created/opened.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nThe datanode heartbeat task which sending …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nStart heartbeat task, spawn background task.\nCreate a new heartbeat task instance.\nHandler of the instruction.\nHandler for Instruction::OpenRegion and …\nBuilds the InstructionHandler.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the RegionHeartbeatResponseHandler.\nThe registering result of a async task.\nThe running async task.\nThe state of a async task.\nTracks the long-running async tasks.\nThe result of waiting.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if it’s RegisterResult::Busy.\nReturns an empty [AsyncTaskTracker].\nTries to register a new async task, returns …\nWaits for a RegisterResult and returns a WaitResult.\nThe elapsed time of handling a request in the …\nThe received region leases via heartbeat.\nThe elapsed time since the last received heartbeat.\nThe elapsed time since the last sent heartbeat.\nRegion request type label.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nResolve to the given region (specified by RegionId) …\nFinds the region’s engine by its id. If the region is …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nHandle reads from remote. They’re often query requests …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns RegionEngineRef.\nReturns all opened and reportable regions.\nStop the region server.\nCreates a new catalog list with the given table provider.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.")