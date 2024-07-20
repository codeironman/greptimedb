(function() {var implementors = {
"common_meta":[["impl&lt;T&gt; Stream for <a class=\"struct\" href=\"common_meta/range_stream/struct.PaginationStream.html\" title=\"struct common_meta::range_stream::PaginationStream\">PaginationStream</a>&lt;T&gt;"]],
"common_recordbatch":[["impl Stream for <a class=\"struct\" href=\"common_recordbatch/adapter/struct.AsyncRecordBatchStreamAdapter.html\" title=\"struct common_recordbatch::adapter::AsyncRecordBatchStreamAdapter\">AsyncRecordBatchStreamAdapter</a>"],["impl Stream for <a class=\"struct\" href=\"common_recordbatch/adapter/struct.DfRecordBatchStreamAdapter.html\" title=\"struct common_recordbatch::adapter::DfRecordBatchStreamAdapter\">DfRecordBatchStreamAdapter</a>"],["impl Stream for <a class=\"struct\" href=\"common_recordbatch/adapter/struct.RecordBatchStreamAdapter.html\" title=\"struct common_recordbatch::adapter::RecordBatchStreamAdapter\">RecordBatchStreamAdapter</a>"],["impl Stream for <a class=\"struct\" href=\"common_recordbatch/struct.EmptyRecordBatchStream.html\" title=\"struct common_recordbatch::EmptyRecordBatchStream\">EmptyRecordBatchStream</a>"],["impl Stream for <a class=\"struct\" href=\"common_recordbatch/struct.SimpleRecordBatchStream.html\" title=\"struct common_recordbatch::SimpleRecordBatchStream\">SimpleRecordBatchStream</a>"],["impl Stream for <a class=\"struct\" href=\"common_recordbatch/util/struct.ChainedRecordBatchStream.html\" title=\"struct common_recordbatch::util::ChainedRecordBatchStream\">ChainedRecordBatchStream</a>"],["impl&lt;S: Stream&lt;Item = <a class=\"type\" href=\"common_recordbatch/error/type.Result.html\" title=\"type common_recordbatch::error::Result\">Result</a>&lt;<a class=\"struct\" href=\"common_recordbatch/recordbatch/struct.RecordBatch.html\" title=\"struct common_recordbatch::recordbatch::RecordBatch\">RecordBatch</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; Stream for <a class=\"struct\" href=\"common_recordbatch/struct.RecordBatchStreamWrapper.html\" title=\"struct common_recordbatch::RecordBatchStreamWrapper\">RecordBatchStreamWrapper</a>&lt;S&gt;"],["impl&lt;T, E&gt; Stream for <a class=\"struct\" href=\"common_recordbatch/adapter/struct.RecordBatchStreamTypeAdapter.html\" title=\"struct common_recordbatch::adapter::RecordBatchStreamTypeAdapter\">RecordBatchStreamTypeAdapter</a>&lt;T, E&gt;<div class=\"where\">where\n    T: Stream&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"common_recordbatch/struct.DfRecordBatch.html\" title=\"struct common_recordbatch::DfRecordBatch\">DfRecordBatch</a>, E&gt;&gt;,\n    E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</div>"]],
"file_engine":[["impl Stream for <a class=\"struct\" href=\"file_engine/query/struct.FileToScanRegionStream.html\" title=\"struct file_engine::query::FileToScanRegionStream\">FileToScanRegionStream</a>"]],
"index":[["impl Stream for <a class=\"struct\" href=\"index/inverted_index/create/sort/merge_stream/struct.MergeSortedStream.html\" title=\"struct index::inverted_index::create::sort::merge_stream::MergeSortedStream\">MergeSortedStream</a>"]],
"promql":[["impl Stream for <a class=\"struct\" href=\"promql/extension_plan/empty_metric/struct.EmptyMetricStream.html\" title=\"struct promql::extension_plan::empty_metric::EmptyMetricStream\">EmptyMetricStream</a>"],["impl Stream for <a class=\"struct\" href=\"promql/extension_plan/histogram_fold/struct.HistogramFoldStream.html\" title=\"struct promql::extension_plan::histogram_fold::HistogramFoldStream\">HistogramFoldStream</a>"],["impl Stream for <a class=\"struct\" href=\"promql/extension_plan/instant_manipulate/struct.InstantManipulateStream.html\" title=\"struct promql::extension_plan::instant_manipulate::InstantManipulateStream\">InstantManipulateStream</a>"],["impl Stream for <a class=\"struct\" href=\"promql/extension_plan/normalize/struct.SeriesNormalizeStream.html\" title=\"struct promql::extension_plan::normalize::SeriesNormalizeStream\">SeriesNormalizeStream</a>"],["impl Stream for <a class=\"struct\" href=\"promql/extension_plan/range_manipulate/struct.RangeManipulateStream.html\" title=\"struct promql::extension_plan::range_manipulate::RangeManipulateStream\">RangeManipulateStream</a>"],["impl Stream for <a class=\"struct\" href=\"promql/extension_plan/scalar_calculate/struct.ScalarCalculateStream.html\" title=\"struct promql::extension_plan::scalar_calculate::ScalarCalculateStream\">ScalarCalculateStream</a>"],["impl Stream for <a class=\"struct\" href=\"promql/extension_plan/series_divide/struct.SeriesDivideStream.html\" title=\"struct promql::extension_plan::series_divide::SeriesDivideStream\">SeriesDivideStream</a>"],["impl Stream for <a class=\"struct\" href=\"promql/extension_plan/union_distinct_on/struct.UnionDistinctOnStream.html\" title=\"struct promql::extension_plan::union_distinct_on::UnionDistinctOnStream\">UnionDistinctOnStream</a>"]],
"query":[["impl Stream for <a class=\"struct\" href=\"query/range_select/plan/struct.RangeSelectStream.html\" title=\"struct query::range_select::plan::RangeSelectStream\">RangeSelectStream</a>"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>() + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; Stream for <a class=\"struct\" href=\"query/metrics/struct.OnDone.html\" title=\"struct query::metrics::OnDone\">OnDone</a>&lt;F&gt;"]],
"script":[["impl Stream for <a class=\"struct\" href=\"script/python/engine/struct.CoprStream.html\" title=\"struct script::python::engine::CoprStream\">CoprStream</a>"]],
"servers":[["impl Stream for <a class=\"struct\" href=\"servers/grpc/flight/stream/struct.FlightRecordBatchStream.html\" title=\"struct servers::grpc::flight::stream::FlightRecordBatchStream\">FlightRecordBatchStream</a>"]],
"table":[["impl Stream for <a class=\"struct\" href=\"table/table/numbers/struct.NumbersStream.html\" title=\"struct table::table::numbers::NumbersStream\">NumbersStream</a>"],["impl Stream for <a class=\"struct\" href=\"table/table/scan/struct.StreamWithMetricWrapper.html\" title=\"struct table::table::scan::StreamWithMetricWrapper\">StreamWithMetricWrapper</a>"],["impl Stream for <a class=\"struct\" href=\"table/test_util/memtable/struct.MemtableStream.html\" title=\"struct table::test_util::memtable::MemtableStream\">MemtableStream</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()